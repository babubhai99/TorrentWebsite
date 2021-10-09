import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  url: string = 'https://ordinary-moth-68.loca.lt';

  data = new Subject();
  searchholder = new Subject();
  constructor() { }

   capitalised(msg: string) {
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  }

  async loadNavigation(){
    let navdata = await (await fetch(`${this.url}/api/categories/`)).json();
    return navdata.categories;
  }

  async communicate(msg: string){
    let info = await (await fetch(`${this.url}/api/top/${msg}`)).json()
    this.data.next(info);

    this.searchholder.next(this.capitalised(msg));
  }

  async defaultitems(msg: any){
    let info = await (await fetch(` ${this.url}/api/top/${msg}`)).json();
    return info.items;
  }

  async search(query: string){
    let result = await (await fetch(`${this.url}/api/search/${query}`)).json();
    return result.items;
  }

}
