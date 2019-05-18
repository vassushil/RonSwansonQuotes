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
  get_quotes(): void{
    this.quotes.get().subscribe(val => {this.quoctes2 = val as [string];});
  }
  ngOnInit(){
     this.get_quotes();  
  }

}
