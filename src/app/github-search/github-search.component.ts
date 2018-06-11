import { Component, OnInit , Input} from '@angular/core';
import {Response, Http} from '@angular/http'
import {SearchResult} from './search-result.model';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  
  results : SearchResult[];
  

  constructor(private http: Http) { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]){
    this.results = results;
    console.log("results:", this.results);
  }

}
