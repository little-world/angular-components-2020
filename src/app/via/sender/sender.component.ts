import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  send(): void {
    this.messageService.send('hello, world');

  }
}
