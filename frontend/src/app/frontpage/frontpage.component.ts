import { query } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  data: any = '';
  searchholder: any = 'Search';
  data_cache: string = '';
  pagination: Array<number> = [1, 2, 3, 4, 5];

  constructor(private nav: NavService){}

  async ngOnInit(){
    this.data = await this.nav.defaultitems('movies');
  

    this.nav.data.subscribe(message=>{
      this.data = ''
      this.data = message;
      this.data = this.data.items;
    },error => { throw error })

    this.nav.searchholder.subscribe(message => {
      this.searchholder = "Search "+ message;
    })
  }

  async onquerySubmit(query: any){
    if (this.data_cache !== query.value){
      this.data_cache = query.value;
      this.data = '';
      this.data = await this.nav.search(query.value+'/1');
    }
  }

  async paginationFun(i: number, query: any){
    this.data = '';
    this.data = await this.nav.search(query.value+`/${i}`)
    if (this.data === ''){
      this.data = 'No results';
    }
  }

}
