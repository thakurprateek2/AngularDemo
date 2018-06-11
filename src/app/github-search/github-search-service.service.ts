import { Injectable, Inject } from '@angular/core';
import { Http, Response} from '@angular/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { SearchResult } from './search-result.model';


export const GITHUB_SEARCH_URL = 'https://api.github.com/search/users';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchServiceService {

  constructor(private http: Http,
  @Inject(GITHUB_SEARCH_URL) private apiUrl : string ) { 

  }

  search(query: String): Observable<SearchResult[]>{
    const params = `q=${query}`;
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.request(queryUrl).pipe(map((response: Response) => {
      return (<any>response.json()).items.map(item => {
        console.log("raw item", item); // uncomment if you want to debug
        return new SearchResult(item);
      });
    }));
  }
}
