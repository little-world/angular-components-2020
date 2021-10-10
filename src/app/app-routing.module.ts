import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AComponent} from './routing/a/a.component';
import {BComponent} from './routing/b/b.component';
import {ContainerComponent} from './routes/container/container.component';
import {DetailComponent} from './routes/detail/detail.component';

const routes: Routes = [
  {path: 'a', component: AComponent},
  {path: 'b', component: BComponent},
  {path: 'detail/:message', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
