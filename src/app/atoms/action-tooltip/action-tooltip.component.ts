import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-tooltip',
  templateUrl: './action-tooltip.component.html',
  styleUrls: ['./action-tooltip.component.scss']
})
export class ActionTooltipComponent implements OnInit {

  @Input() helpText: string;

  constructor() { }

  ngOnInit() {
  }

}
