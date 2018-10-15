import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-base',
  templateUrl: './template-base.component.html',
  styleUrls: ['./template-base.component.scss']
})
export class TemplateBaseComponent implements OnInit {

  @Input() sectionName: string;
  @Input() currentProgress: string;

  constructor() { }

  ngOnInit() {
  }

}
