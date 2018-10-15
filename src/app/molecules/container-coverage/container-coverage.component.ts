import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-container-coverage',
  templateUrl: './container-coverage.component.html',
  styleUrls: ['./container-coverage.component.scss']
})
export class ContainerCoverageComponent implements OnInit {

  @Input() isCardTitle: string;
  @Input() isCoverageType: string;
  @Input() hasFooter: boolean = false;
  public checkedState: boolean;
  public hoverState: boolean = false;

  modifyParentStyle () {
    this.checkedState = !this.checkedState;
  }

  checkboxIsNotChecked () {
    return !this.checkedState;
  }

  // displays a footer if user sets boolean true; you must also create a <div footer>content here</div> in your parent component.
  displayFooter() {
    return this.hasFooter || false;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hoverState = true;
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.hoverState = false;
  }

  constructor() { }

  ngOnInit() { }

}
