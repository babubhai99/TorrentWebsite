import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  async getNavCategories(){
    let data = await (await fetch('http://userc3ebf3923695959.app.vtxhub.com/api/categories/')).json();
    return data.categories;
  }

  async gettop(category: any){
    let data = await (await fetch(`http://userc3ebf3923695959.app.vtxhub.com/api/top/${category}`)).json();
    return data.items;
  }

}
