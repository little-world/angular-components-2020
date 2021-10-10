import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EenComponent } from './naast-elkaar/een/een.component';
import { TweeComponent } from './naast-elkaar/twee/twee.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { AComponent } from './routing/a/a.component';
import { BComponent } from './routing/b/b.component';
import { SenderComponent } from './via/sender/sender.component';
import { ReceiverComponent } from './via/receiver/receiver.component';
import {DetailComponent} from './routes/detail/detail.component';
import {ContainerComponent} from './routes/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    EenComponent,
    TweeComponent,
    ParentComponent,
    ChildComponent,
    AComponent,
    BComponent,
    ContainerComponent,
    DetailComponent,
    SenderComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
