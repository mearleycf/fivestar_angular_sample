import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-date',
  templateUrl: './type-date.component.html',
  styleUrls: ['./type-date.component.css']
})
export class TypeDateComponent implements OnInit {

  @Input() isPlaceholder: string;
  public now = Date.now();
  public minDate: any = new Date(this.now);
  public needMinDate: boolean = false;

  date = new Date();

  public hasMinDate = () => {
    return this.needMinDate || false;
  }

  constructor() { }

  ngOnInit() {
  }

}
