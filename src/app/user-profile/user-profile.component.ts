import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SerchHistoryServiceService} from '../search-history/serch-history-service.service';
import { SearchResult } from '../github-search/search-result.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: string;

  user: SearchResult;

  constructor(private route: ActivatedRoute, private _location: Location,private serchHistoryServiceService: SerchHistoryServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => { 
      this.id = params['id'];
      this.loadUser(this.id);
    });
  }

  loadUser(id: string){
    this.user = this.serchHistoryServiceService.fetchSingleUser(this.id); 
  }

  removeFromHistory(){
    this.serchHistoryServiceService.removeFromLocalStorage(this.user);
    this._location.back();
  }

  addToFavories(){
    this.serchHistoryServiceService.addToFavorites(this.user);
    this.loadUser(this.id);
  }

  removeFromFavorites(){
    this.serchHistoryServiceService.removeFromFavorites(this.user);
    this.loadUser(this.id);
  }

}
