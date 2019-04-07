import { MowerRoutingModule } from './mower-routing.module';
import { MowersComponent } from './mowers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MowerListComponent } from './mower-list/mower-list.component';
import { MowerItemComponent } from './mower-list/mower-item/mower-item.component';
import { MowerStartComponent } from './mower-start/mower-start.component';
import { MowerDetailComponent } from './mower-detail/mower-detail.component';

@NgModule({
  declarations: [MowersComponent, MowerListComponent, MowerItemComponent, MowerStartComponent, MowerDetailComponent],
  imports: [
    CommonModule,
    MowerRoutingModule,
    SharedModule
  ]
})
export class MowersModule { }
