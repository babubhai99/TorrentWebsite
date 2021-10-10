import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavService } from 'frontend/src/app/service/nav.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  url: string = '';
  constructor(private nav: NavService, private router: Router) { }

  ngOnInit(){
    this.url = this.nav.url;
  }


}
