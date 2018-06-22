import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { DthComponent } from './dth/dth.component';
import { BroadBandComponent } from './broad-band/broad-band.component';

const routes: Routes = [
  {path: '', redirectTo: 'mobile', pathMatch: 'full'},
  {path: 'mobile', component: MobileComponent},
  {path: 'dth', component: DthComponent},
  {path: 'bband', component: BroadBandComponent},
  {path: '**', redirectTo: 'mobile'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
