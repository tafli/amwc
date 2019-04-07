import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent]
})
export class CoreModule {}
