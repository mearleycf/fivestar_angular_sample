import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-coverage-property',
  templateUrl: './coverage-property.component.html',
  styleUrls: ['./coverage-property.component.css']
})
export class CoveragePropertyComponent implements OnInit {

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

  ngOnInit() {
  }

}
