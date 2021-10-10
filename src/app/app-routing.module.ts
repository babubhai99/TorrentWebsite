import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { TorrentpageComponent } from './torrentpage/torrentpage.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'home', component: FrontpageComponent},
  {path: 'info/:id', component: TorrentpageComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
