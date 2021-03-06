import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public folder: string;
  
  constructor( private router:Router) {
      this.router.events.subscribe((event: NavigationEnd) => {
        if(event instanceof NavigationEnd){
          this.folder = event.urlAfterRedirects.split('/').pop();
          if(this.folder.includes('_')){
            this.folder = this.folder.replace(/_/g, ' ');
          }
        }
      });
  }

  ngOnInit() {

  }

}
