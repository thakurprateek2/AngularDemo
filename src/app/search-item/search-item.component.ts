import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {SerchHistoryServiceService} from '../search-history/serch-history-service.service';
import {SearchResult} from '../github-search/search-result.model';



@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() result : SearchResult;
    
  @Output() userUpdated: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  
  constructor(private serchHistoryServiceService : SerchHistoryServiceService) { }

  ngOnInit() {
  }

  removeFromHistory(){
    this.serchHistoryServiceService.removeFromLocalStorage(this.result);
    this.userUpdated.emit();
  }

  addToFavories(){
    this.serchHistoryServiceService.addToFavorites(this.result);
    this.userUpdated.emit();
    
  }

  removeFromFavorites(){
    this.serchHistoryServiceService.removeFromFavorites(this.result);
    this.userUpdated.emit();
    
  }

}
