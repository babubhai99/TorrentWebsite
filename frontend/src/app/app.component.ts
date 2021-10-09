import { Component, OnInit } from '@angular/core';
import { NavService } from './service/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  navSelect: any;

  constructor(private Nav: NavService){}
  async ngOnInit(){
  }
  onNavClick(sel: any){
    this.navSelect = sel;
  }


}
