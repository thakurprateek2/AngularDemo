import { Component, OnInit } from '@angular/core';
import { SerchHistoryServiceService} from './serch-history-service.service'
import { SearchResult } from '../github-search/search-result.model';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  users: Array<SearchResult>;
  sortField: String;
  constructor(private serchHistoryServiceService: SerchHistoryServiceService) { }

  ngOnInit() {
    console.log('on initializing!');
    this.updateUsers();
  }
  
  updateUsers(){
    this.users = this.serchHistoryServiceService.fetchUsersFromLocalStorage();
  }

  sortByName(){
    this.sortField = 'name';
  }

  sortByFavorite(){
    this.sortField = 'favorite';
  }

  sortUsers(): Array<SearchResult>{

    if(this.sortField === 'name'){
      return this.users.sort(function (a, b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });

    }

    if(this.sortField === 'favorite'){
      return this.users.sort(function(a, b){
        if(a.favorite) return -1;
        if(!a.favorite) return 1;
        return 0;
    });
    }

    return this.users;
    
  }

}
