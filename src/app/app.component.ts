import { Component } from '@angular/core';
import {QuotesService} from '../app/quotes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private quotes: QuotesService) { }
  title = 'Ron Swanson Quotes';
  image = 'https://i.redd.it/cgwt0v6lgon11.jpg';
  quoctes2:[string];
  sentiment:string
  get_quotes(): void{
    this.sentiment = '';
    this.quotes.get().subscribe(val => {this.quoctes2 = val as [string];});
  }
  get_insult(): void{
    this.quotes.getInsult().subscribe(val => {this.quoctes2 = val as [string];});
  }

  analyse_sentiment(): void{
    this.quotes.analyseText(this.quoctes2[0]).subscribe(val => {this.sentiment = val.result.type as string;})
  }
  ngOnInit(){
     this.get_quotes();  
  }

}
