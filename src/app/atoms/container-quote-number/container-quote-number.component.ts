import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-quote-number',
  templateUrl: './container-quote-number.component.html',
  styleUrls: ['./container-quote-number.component.scss']
})
export class ContainerQuoteNumberComponent implements OnInit {

  @Input() quoteNumber: string;

  constructor() { }

  ngOnInit() {
  }

}
