import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {SearchResult} from '../github-search/search-result.model';
import {SerchHistoryServiceService} from '../search-history/serch-history-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() result : SearchResult;  

  loading: boolean;

  constructor(private serchHistoryServiceService : SerchHistoryServiceService) { }

  ngOnInit() {
  }

  addToHistory(){
    this.serchHistoryServiceService.addToHistory(this.result);
  }

 

}
