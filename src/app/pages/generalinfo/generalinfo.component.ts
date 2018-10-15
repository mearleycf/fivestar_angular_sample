import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styleUrls: ['./generalinfo.component.scss']
})
export class GeneralinfoComponent implements OnInit {

  @Input() businessType: string;

  constructor() { }

  ngOnInit() {
    this.businessType = 'Remodeling';
  }

}
