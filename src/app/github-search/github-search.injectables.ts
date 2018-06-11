import {
    GithubSearchServiceService,
    GITHUB_SEARCH_URL
  } from './github-search-service.service';
  
  export const githubSearchInjectables: Array<any> = [
    {provide: GithubSearchServiceService, useClass: GithubSearchServiceService},
    {provide: GITHUB_SEARCH_URL, useValue: GITHUB_SEARCH_URL}
  ];
  