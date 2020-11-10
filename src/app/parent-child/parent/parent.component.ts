import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent)
  child: ChildComponent;

  constructor() { }

  ngAfterViewInit(): void {

    this.child.message = 'a message from the parent';
  }

}
