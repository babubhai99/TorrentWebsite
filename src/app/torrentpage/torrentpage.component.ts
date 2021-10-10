import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-torrentpage',
  templateUrl: './torrentpage.component.html',
  styleUrls: ['./torrentpage.component.css']
})
export class TorrentpageComponent implements OnInit {
  id: any = 0;
  data: any = '';
  constructor(private route: ActivatedRoute, private nav: NavService) {
    this.id = this.route.snapshot.params.id;
  }

  async ngOnInit(){
    this.data = '';
    this.data = await this.nav.info(this.id);
    console.log(this.data.name)
  }

  goToLink(link: string){
      let error = window.open(link, "_blank");
      console.log(error);
  }

}
