import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { DthComponent } from './dth/dth.component';
import { BroadBandComponent } from './broad-band/broad-band.component';
import { HeaderComponent } from './header/header.component';
import { OrderByPipe } from './order-by.pipe';
import { PlanService } from './plan.service';

import { FilterPipe } from './filter.pipe';
import { AppendTextDirective } from './append-text.directive';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    DthComponent,
    BroadBandComponent,
    HeaderComponent,
    OrderByPipe,
    FilterPipe,
    AppendTextDirective,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule
  ],
  providers: [HttpClient, PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
