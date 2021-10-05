import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  async getNavCategories(){
    let data = await (await fetch('http://127.0.0.1:8000/api/categories')).json();
    return data.categories;
  }

}
