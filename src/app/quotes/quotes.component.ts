import { Component, OnInit } from '@angular/core';
import {Quote} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'some guy','when i was born i was so shocked that i didnt speak for one and a half years',new Date(2018,6,16) ),
      new Quote(2,'shakespeare','to be or not to be, that is the question', new Date(1968,7,5) ),


  ]

    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    // completeQuote(isComplete,index){
    //    if (isComplete) {
    //        this.quotes.splice(index, 1);
    //        }
    //        }

  constructor() { }
  ngOnInit() {
  }
  deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`confirm you want to delete ${this.quotes[index].name}`)

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }
addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength + 1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}
}
