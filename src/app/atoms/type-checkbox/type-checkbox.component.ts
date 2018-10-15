import { AtomsModule } from './../atoms.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-type-checkbox',
  templateUrl: './type-checkbox.component.html',
  styleUrls: ['./type-checkbox.component.scss']
})
export class TypeCheckboxComponent implements OnInit {

  @Input() label: string;
  public checked = false;

  constructor() { }

  ngOnInit() {
    this.checked = false;
  }

}
