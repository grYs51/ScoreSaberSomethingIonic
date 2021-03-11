import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./Pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'leaderboard',
        loadChildren: () =>
          import('./Pages/leaderboard/leaderboard.module').then(
            (m) => m.LeaderboardPageModule
          ),
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('./Pages/maps/maps.module').then((m) => m.MapsPageModule),
      },
      {
        path: 'ranked_maps',
        loadChildren: () =>
          import('./Pages/ranked-maps/ranked-maps.module').then(
            (m) => m.RankedMapsPageModule
          ),
      },
      {
        path: 'friends',
        loadChildren: () =>
          import('./Pages/friends/friends.module').then(
            (m) => m.FriendsPageModule
          ),
      },
      {
        path: '**',
        redirectTo: 'profile',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
