import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home/profile',
      pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'profile',
                loadChildren: () => 
                    import('./Pages/profile/profile.module').then(
                        m => m.ProfilePageModule
                    )
            },{
                path: 'leaderboard',
                loadChildren: () => 
                    import('./Pages/leaderboard/leaderboard.module').then(
                        m => m.LeaderboardPageModule
                    )
            },{
                path: 'maps',
                loadChildren: () => 
                    import('./Pages/maps/maps.module').then(
                        m => m.MapsPageModule
                    )
            },{
                path: 'ranked_maps',
                loadChildren: () => 
                    import('./Pages/ranked-maps/ranked-maps.module').then(
                        m => m.RankedMapsPageModule
                    )
            },{
                path: 'friends',
                loadChildren: () => 
                    import('./Pages/friends/friends.module').then(
                        m => m.FriendsPageModule
                    )
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
