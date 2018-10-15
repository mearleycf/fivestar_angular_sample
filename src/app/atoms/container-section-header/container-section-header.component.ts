import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-section-header',
  templateUrl: './container-section-header.component.html',
  styleUrls: ['./container-section-header.component.css']
})
export class ContainerSectionHeaderComponent implements OnInit {

  @Input() sectionName: string;

  constructor() { }

  ngOnInit() {
  }

}
