import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-radio',
  templateUrl: './type-radio.component.html',
  styleUrls: ['./type-radio.component.scss']
})
export class TypeRadioComponent implements OnInit {

  @Input() radioButtons: string[];
  public hasTwoButtons: boolean = false;

  applyTwoButtonWidth() {
    if ( this.radioButtons.length <= 2 ) {
      this.hasTwoButtons = true;
      console.log(this.hasTwoButtons);
    }
  }

  constructor() { }

  ngOnInit() {
    this.applyTwoButtonWidth();
  }

}
