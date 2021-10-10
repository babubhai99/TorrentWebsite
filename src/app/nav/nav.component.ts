import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private Nav: NavService, private router: Router) { }
  nav_items: any;
  async ngOnInit(){
    this.nav_items = await this.Nav.loadNavigation();
  }


  onclick(item: any){
    this.Nav.communicate(item);
  }


}
