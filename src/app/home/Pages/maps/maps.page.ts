import { IBeatSavermaplist } from './../../../Interfaces/BeatSaver/IBeatsaverMapList';
import { BeatsaverApiService } from './../../../Shared/Services/BeatSaver/beatsaver-api.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';

@Component({
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.css'],
})
export class MapsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  vColMinWidth = 600; // virtual list columns min width as pixel
  exteraCol = 0; // how many columns should be add to virtual list
  nextPipe = 0;
  screenWidth: number;

  searching: boolean = false;
  searchTerm: string = '';

  filter: Filter = Filter.Hot;
  page: number = 0;
  maps: IBeatSavermaplist = null;

  Filters = [
    Filter.Hot,
    Filter.Rating,
    Filter.Latest,
    Filter.Downloads,
    Filter.Plays,
  ];

  constructor(private beatsaverApiSrv: BeatsaverApiService) {
    this.getScreenSize();
  }

  itemHeightFn(item, index) {
    // better performance if setting item height
    return 130;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    this.exteraCol = Math.trunc(this.screenWidth / this.vColMinWidth) - 1;
    this.exteraCol = this.exteraCol < 0 ? 0 : this.exteraCol;
    this.exteraCol = this.exteraCol > 3 ? 3 : this.exteraCol; // if we want to have max virtual column count
  }

  async ngOnInit(): Promise<void> {
    this.maps = await this.FetchData(Filter.Hot);
    this.nextPipe = this.maps.docs.length;
  }

  async onSearchInput(event) {
    this.searchTerm = event.target.value;
    this.searching = true;
    this.maps = null;
    this.page = 0;

    if (this.searchTerm == '') {
      this.filter = Filter.Hot;
    } else {
      this.filter = Filter.Search;
    }

    this.maps = await this.FetchData(this.filter, this.searchTerm, this.page);
    this.nextPipe = this.maps.docs.length;
    this.searching = false;
  }

  async loadData(event) {
    this.page++;

    let obj: IBeatSavermaplist = await this.FetchData(
      this.filter,
      this.searchTerm,
      this.page
    );

    obj.docs.forEach((song) => {
      this.maps.docs.push(song);
    });

    this.nextPipe = this.maps.docs.length;

    event.target.complete();
  }

  async FetchData(
    filter: Filter,
    text: string = '',
    page: number = 0,
    automapper: number = 1
  ) {
    switch (filter) {
      case Filter.Search:
        return await this.beatsaverApiSrv.FetchMapsBySearch(
          page,
          text,
          automapper
        );
      case Filter.Uploader:
        return await this.beatsaverApiSrv.FetchMapsByUploader(page, text);
      default:
        return await this.beatsaverApiSrv['FetchMapsBy' + filter](page);
    }
  }

  async filterButton(filterObj: Filter) {
    if (filterObj != this.filter) {
      this.filter = filterObj;
      this.maps = null;
      this.page = 0;
      this.searching = true;

      this.maps = await this.FetchData(this.filter, this.searchTerm, this.page);
      this.nextPipe = this.maps.docs.length;
    }
    this.searching = false;
  }
}

enum Filter {
  Hot = 'Hot',
  Rating = 'Rating',
  Latest = 'Latest',
  Downloads = 'Downloads',
  Plays = 'Plays',
  Search = 'Search',
  Uploader = 'Uploader',
}
