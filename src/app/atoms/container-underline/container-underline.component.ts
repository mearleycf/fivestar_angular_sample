import { AtomsModule } from './../atoms.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-underline',
  templateUrl: './container-underline.component.html',
  styleUrls: ['./container-underline.component.scss']
})
export class ContainerUnderlineComponent implements OnInit {

  @Input() isFlat: boolean = true;
  @Input() left: string;
  @Input() right: string;

  // set isFlat="true" to make the card be flat; otherwise the card will be raised
  cardIsFlat() {
    return this.isFlat || false;
  }

  constructor() { }

  ngOnInit() {
  }

}
