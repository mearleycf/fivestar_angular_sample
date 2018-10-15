import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-container-circle-icon',
  templateUrl: './container-circle-icon.component.html',
  styleUrls: ['./container-circle-icon.component.css']
})
export class ContainerCircleIconComponent implements OnInit {

  @Input() inputsize: string;
  @Input() backgroundcolor: string;
  public fontSize: string;
  public backgroundColor: string;
  public containerSize: string;
  public radiusSize: string;

  constructor() { }

  ngOnInit() {
    const sizeContainer = (input) => {
      let container = parseInt(input, 10);
      container = container * 2;
      console.log(container);
      return container;
    };
    const sizeContainerRadius = (input) => {
      let container = parseInt(input, 10);
      container = container * 2;
      container += 2;
      console.log(container);
      return container;
    };
    // spec the inputs going into the circle-icon-container selector in the parent element
    this.fontSize = this.inputsize + 'px';
    this.containerSize = sizeContainer(this.inputsize) + 'px';
    console.log(this.containerSize);
    this.backgroundColor = this.backgroundcolor;
    this.radiusSize = sizeContainerRadius(this.inputsize) + 'px';
   }

}
