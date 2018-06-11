import { Injectable } from '@angular/core';
import { SearchResult } from '../github-search/search-result.model';


@Injectable({
  providedIn: 'root'
})
export class SerchHistoryServiceService {

  constructor() { }

  addToHistory(user: SearchResult){
    let userArray: Array<SearchResult> = this.fetchUsersFromLocalStorage();
    userArray.push(user);
    this.saveUsers(userArray);
  }

  saveUsers(users: Array<SearchResult>){
    localStorage.setItem('users', JSON.stringify(users));
  }

  fetchUsersFromLocalStorage(): Array<SearchResult>{
    let usersListString = localStorage.getItem('users');
    if(usersListString){
      return JSON.parse(usersListString) as Array<SearchResult>;
    }
    return new Array<SearchResult>();
  }

  removeFromLocalStorage(user: SearchResult): Array<SearchResult>{
    let userArray: Array<SearchResult> = this.fetchUsersFromLocalStorage();
    userArray.splice( userArray.findIndex(u=>u.id === user.id), 1);
    this.saveUsers(userArray);
    return userArray;
  }

  addToFavorites(user: SearchResult): Array<SearchResult>{
    let userArray: Array<SearchResult> = this.fetchUsersFromLocalStorage();
    userArray.find(u=>u.id === user.id).favorite = true;
    this.saveUsers(userArray);
    return userArray;
  }

  removeFromFavorites(user: SearchResult): Array<SearchResult>{
    let userArray: Array<SearchResult> = this.fetchUsersFromLocalStorage();
    userArray.find(u=>u.id === user.id).favorite = false;
    this.saveUsers(userArray);
    return userArray;
  }

  fetchSingleUser(id): SearchResult{
    let userArray: Array<SearchResult> = this.fetchUsersFromLocalStorage();
    return userArray.find(u=>u.id == id);
  }
}
