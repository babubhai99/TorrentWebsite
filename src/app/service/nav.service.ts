import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  url: string = 'https://brown-cheetah-51.loca.lt';

  data = new Subject();
  searchholder = new Subject();
  constructor(private router: Router) {  }

   capitalised(msg: string) {
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  }

  async loadNavigation(){
    let navdata = await (await fetch(`${this.url}/api/categories/`)).json();
    return navdata.categories;
  }

  async communicate(msg: string){
    this.router.navigate(['/home']);
    this.data.next('');
    let info = await (await fetch(`${this.url}/api/top/${msg}`)).json()
    setTimeout(()=>{this.data.next(info);}, 1000)
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

  async info(id: any){
    let result = await (await fetch(`${this.url}/api/info/${id}`)).json();
    return result;
  }
}
