import { Component, OnInit, Input } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-type-input',
  templateUrl: './type-input.component.html',
  styleUrls: ['./type-input.component.scss']
})
export class TypeInputComponent implements OnInit {

  @Input() isPlaceholder: string;
  @Input() isInputType: string;

   constructor() { }

  ngOnInit() {

  }

}
