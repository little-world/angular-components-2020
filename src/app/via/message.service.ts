import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  subject = new Subject<string>();

  send(sendMessage: string) {
     this.subject.next(sendMessage);

  }
}
