import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  // GettyImage Settings https://embed.plnkr.co/?show=preview
  gettyConfig = {
    apiKey: "9u2bwdgu6zzmfbu7xeqnaazt",
    baseUrl: "https://api.gettyimages.com/v3",
    searchUrl: "/search/images",
    detailsUrl: "/images"
  };
  reqOtions: RequestOptions;

  constructor(private http: Http) {
    let reqHeader: Headers = new Headers();
    reqHeader.set('Content-type', 'application/json');
    reqHeader.append('Api-Key', this.gettyConfig.apiKey);
    this.reqOtions = new RequestOptions({
      headers: reqHeader
    })
  }

  search(term, page = 1) {
    return this.http
      .get(this.gettyConfig.baseUrl + this.gettyConfig.searchUrl + '?phrase=' + term + '&fields=preview, title, max_dimensions' + '&page=' + page, this.reqOtions)
      .map(response =>
        this.handleSearchResult(response)
      );
  }
  handleSearchResult(response) {
    return response.json();
  }

  getMetaData(id) {
    return this.http
      .get(this.gettyConfig.baseUrl + this.gettyConfig.detailsUrl + '?ids=' + id + '&fields=detail_set,comp', this.reqOtions)
      .map(response =>
        this.handleMetaDataResult(response)
      );
  }
  handleMetaDataResult(response) {
    return response.json();
  }
}
