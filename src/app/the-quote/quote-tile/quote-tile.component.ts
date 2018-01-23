import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //importing output and eventEmitter

@Component({
  selector: 'app-quote-tile',
  templateUrl: './quote-tile.component.html',
  styleUrls: ['./quote-tile.component.css']
})
export class QuoteTileComponent implements OnInit {
  @Input() quote;
  @Output()
  authorClick: EventEmitter<String> = new EventEmitter<String>(); //creating an output event
  constructor() { }

  ngOnInit() {
  }

  showAuthor(event, author){
    this.authorClick.emit(author); //emmiting the event.
  }

}