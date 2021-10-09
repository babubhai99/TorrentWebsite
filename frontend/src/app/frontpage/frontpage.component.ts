import { Component, Input, OnInit } from '@angular/core';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  data: any = '';
  searchholder: any = 'Search';
  query: string = '';
  constructor(private nav: NavService){}

  async ngOnInit(){

    this.data = this.nav.defaultitems('movies');

    this.nav.data.subscribe(message=>{
      this.data = message;
      this.data = this.data.items;
    },error => { throw error },)

    this.nav.searchholder.subscribe(message => {
      this.searchholder = "Searching "+message+"......"
    })
  }

  async onquerySubmit(query: any){
    this.data = await this.nav.search(query.value+'/1');
  }

}
