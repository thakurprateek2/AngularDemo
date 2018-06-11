/**
 * SearchResult is a data-structure that holds an individual
 * record from a YouTube video search
 */
export class SearchResult {
    id: string;
    title: string;
    thumbnailUrl: string;
    favorite: boolean;
    gitHubUrl: string;
  
    constructor(obj?: any) {
      this.id              = obj && obj.id             || null;
      this.title           = obj && obj.login          || null;
      this.thumbnailUrl    = obj && obj.avatar_url   || null;
      this.favorite = obj && obj.favorite   || false;
      this.gitHubUrl = obj && obj.html_url || null;
    }
  }
  