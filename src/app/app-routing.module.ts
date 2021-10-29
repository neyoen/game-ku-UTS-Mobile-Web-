import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'home', component:HomeComponent},
  {path:'tournament', component:TournamentComponent},
  {path:'leaderboard', component:LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
