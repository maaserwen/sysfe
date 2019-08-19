import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-anchor',
  templateUrl: './dynamic-anchor.component.html',
  styleUrls: ['./dynamic-anchor.component.scss']
})
export class DynamicAnchorComponent implements OnInit {
  @Input()
  anchorList: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
