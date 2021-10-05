import { Component, OnInit } from '@angular/core';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private Nav: NavService) { }
  nav_items: any;
  selected_nav: any;

  async ngOnInit(){
    this.nav_items = await this.Nav.getNavCategories();
    // console.log(this.Nav.getNavCategories())
  }

  async nav_click(item: any){
    this.selected_nav = item;
  }



}
