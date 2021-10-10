import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  message = "hallo"
  details() {
    this.router.navigate(['/detail', this.message])
  }
}
