import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavService } from './service/nav.service';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { TorrentpageComponent } from './torrentpage/torrentpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FrontpageComponent,
    TorrentpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
