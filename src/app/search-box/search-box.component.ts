import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import {SearchResult} from '../github-search/search-result.model'
import {GithubSearchServiceService} from '../github-search/github-search-service.service'
import { Observable, fromEvent } from 'rxjs'
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators'




@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  

  constructor(private githubSearchServiceService: GithubSearchServiceService,
  private github: GithubSearchServiceService, private el: ElementRef) {
  }
  
  ngOnInit() {

    fromEvent(this.el.nativeElement, 'keyup')
    .pipe(map((e: any) => e.target.value))
    .pipe(filter((text: string) => text.length > 1))
    .pipe(debounceTime(250))
    .pipe(tap(()=>{() => this.loading.emit(true)}))
    .pipe(map((query: string)=>this.github.search(query)))
    .pipe(switchAll())
    .subscribe((searchResults : SearchResult[])=>{
      this.loading.emit(false);
          this.results.emit(searchResults);
    },
    (err: any) => { // on error
      console.log(err);
      this.loading.emit(false);
    },
    () => { // on completion
      this.loading.emit(false);
    });
    
  }

}
