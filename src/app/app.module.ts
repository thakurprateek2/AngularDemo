import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { githubSearchInjectables } from './github-search/github-search.injectables';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchItemComponent } from './search-item/search-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'search', component: GithubSearchComponent },
  { path: 'history', component: SearchHistoryComponent },
  { path: 'profile/:id', component: UserProfileComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    SearchHistoryComponent,
    DashboardComponent,
    SearchItemComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [githubSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
