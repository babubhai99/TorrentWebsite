import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { TorrentpageComponent } from './torrentpage/torrentpage.component';

const routes: Routes = [
  {path: '', component: FrontpageComponent},
  {path: 'info/:id', component: TorrentpageComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
