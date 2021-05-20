import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScoreSaberRegexService {
  constructor() {}

  private readonly Regex =
    '(?:http(?:s)?://)?(?:new\\.)?(?:scoresaber\\.com/u/)?(?<scoreSaberId>\\d{16,})(?:/.*)?';

  checkId(input: string) {
    if (input.match(this.Regex) != null) {
      return input.match(this.Regex).groups.scoreSaberId;
    }
    return null;
  }
}
