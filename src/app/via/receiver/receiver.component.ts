import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  message: string;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.subject.asObservable().subscribe(
      data => this.message = data
    );

  }

}
