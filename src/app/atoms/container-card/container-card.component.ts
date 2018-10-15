import { Component, OnInit, Input, Host, HostBinding } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.scss']
})
export class ContainerCardComponent implements OnInit {

  @Input() hasHeader: boolean = false;
  @Input() title: string;
  @Input() actionButtons: string[];
  @Input() radioButtons: string[];
  @Input() hasFooter: boolean = false;
  @Input() subtitle: string;
  @Input() isFlat: boolean = true;

  public buttonSet: string[];
  public buttonArray: string[];

  // set hasHeader="true" on element to include the header content
  displayHeader() {
    return this.hasHeader || false;
  }

  // set title="string" on element to have 'string' be the content of the title element
  displayTitle() {
    const displaytitle = this.title;
    if (displaytitle) {
      return displaytitle;
    } else {return ''}
  }

  // set subtitle="string" as above
  displaySubTitle() {
    const displaysubtitle = this.subtitle;
    if (displaysubtitle) {
      return displaysubtitle;
    } else {return ''}
  }

  // include an array of button labels in the actionButtons[], each item in array
  // will create a button with the specified label; by default buttons are of
  // type primary
  displayButtons() {
    if (this.actionButtons) { return true; } else { return false; }
  }
  displayRadioButtons() {
    if (this.radioButtons) { return true; } else { return false; }
  }

  // displays a footer if user sets boolean true; you must also create a <div footer>content here</div> in your parent component.
  displayFooter() {
    return this.hasFooter || false;
  }

  // set isFlat="true" to make the card be flat; otherwise the card will be raised
  cardIsFlat() {
    return this.isFlat || false;
  }

  constructor() { }

  ngOnInit() { }

}
