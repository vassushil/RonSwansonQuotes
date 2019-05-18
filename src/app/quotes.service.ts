import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }
}
