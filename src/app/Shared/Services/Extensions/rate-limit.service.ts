import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RateLimitService {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  async fetchData<T>(url: string, retries = 3, timeout = 0): Promise<T> {
    if (retries > 0) {
      if (timeout !== 0) {
        console.log('Rate-limited: ', timeout / 1000 + 's');
        await timer(timeout).pipe(take(1)).toPromise();
      }
      return await this._http
        .get<T>(url, { observe: 'response' })
        .toPromise()
        .then((res: HttpResponse<T>) => {
          return res.body;
        })
        .catch((e: HttpErrorResponse) => {
          if (e.status === 429) {
            const time = Math.ceil(
              Number(e.headers.get('x-ratelimit-reset')) - Date.now() / 1000
            );
            return this.fetchData(url, retries - 1, time * 1000);
          }
          return this.fetchData(url, retries - 1, 1000);
        });
    } else {
      throw new Error('Something went wrong with getting data');
    }
  }
}
