import { Injectable } from '@angular/core';
import { RateLimitService } from '../Extensions/rate-limit.service';

@Injectable({
  providedIn: 'root'
})
export class BeatsaverApiService {
  private BEATSAVER_BASEURL = 'https://beatsaver.com';
  private BEATSAVER_API_BASEURL = this.BEATSAVER_BASEURL + '/api/';
  constructor(private rateLimitSrv: RateLimitService) { }

  FetchMapsByHot<IBeatSavermaplist>(page: number = 0): Promise<IBeatSavermaplist> {
    return this.rateLimitSrv.fetchData<IBeatSavermaplist>(`${this.BEATSAVER_API_BASEURL}maps/hot/${page}`);
  }

  FetchMapsByRating<IBeatSavermaplist>(page: number = 0): Promise<IBeatSavermaplist> {
    return this.rateLimitSrv.fetchData<IBeatSavermaplist>(`${this.BEATSAVER_API_BASEURL}maps/rating/${page}`);
  }

  FetchMapsByUploader<IBeatSavermaplist>(page: number = 0, id: string): Promise<IBeatSavermaplist> {
    return this.rateLimitSrv.fetchData<IBeatSavermaplist>(`${this.BEATSAVER_API_BASEURL}maps/uploader/${id}/${page}`);
  }

  FetchMapsByLatest<IBeatSavermaplist>(page: number = 0): Promise<IBeatSavermaplist> {
    return this.rateLimitSrv.fetchData<IBeatSavermaplist>(`${this.BEATSAVER_API_BASEURL}maps/latest/${page}`);
  }

  FetchMapsByDownloads<IBeatSavermaplist>(page: number = 0): Promise<IBeatSavermaplist> {
    return this.rateLimitSrv.fetchData<IBeatSavermaplist>(`${this.BEATSAVER_API_BASEURL}maps/downloads/${page}`);
  }

  FetchMapsByPlays<IBeatSavermaplist>(page: number = 0): Promise<IBeatSavermaplist> {
    return this.rateLimitSrv.fetchData<IBeatSavermaplist>(`${this.BEATSAVER_API_BASEURL}maps/plays/${page}`);
  }

  FetchMapsBySearch<IBeatSavermaplist>(page: number = 0, text: string, autoMapper: number = 1): Promise<IBeatSavermaplist> {
    return this.rateLimitSrv.fetchData<IBeatSavermaplist>(`${this.BEATSAVER_API_BASEURL}search/text/${page}?q=${encodeURIComponent(text)}&?automapper=${autoMapper}`);
  }


  FetchMapByKey<IBeatSaverMap>(key: string): Promise<IBeatSaverMap> {
    return this.rateLimitSrv.fetchData<IBeatSaverMap>(`${this.BEATSAVER_API_BASEURL}maps/detail/${key}`);
  }

  FetchMapByHash<IBeatSaverMap>(hash: string): Promise<IBeatSaverMap> {
    return this.rateLimitSrv.fetchData<IBeatSaverMap>(`${this.BEATSAVER_API_BASEURL}maps/by-hash/${hash}`);
  }
}
