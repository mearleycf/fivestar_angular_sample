import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  @Input() sectionName: string;
  @Input() currentProgress: string;

  constructor() { }

  ngOnInit() {
  }

}
