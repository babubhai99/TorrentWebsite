import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private Nav: NavService) { }
  nav_items: any;
  async ngOnInit(){
    this.nav_items = await this.Nav.loadNavigation();
  }


  onclick(item: any){
    this.Nav.communicate(item);
  }


}
