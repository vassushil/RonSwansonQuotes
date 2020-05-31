import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }

  public getInsult(){
    var h = new HttpHeaders({'Access-Control-Allow-Origin':'*'});
    return this.httpClient.get('https://evilinsult.com/generate_insult.php?lang=en&type=json', {headers:h});
  }

  public analyseText(a: String){
    var h = new HttpHeaders({'Accept': 'application/json', 'Content-Type': 'application/json'});
    return this.httpClient.post<any>('https://sentim-api.herokuapp.com/api/v1/', {"text":a}, {headers:h});
    
  }
}
