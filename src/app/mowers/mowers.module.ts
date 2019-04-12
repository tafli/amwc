import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { SharedModule } from '../shared/shared.module';
import { MowerDetailComponent } from './mower-detail/mower-detail.component';
import { MowerItemComponent } from './mower-list/mower-item/mower-item.component';
import { MowerListComponent } from './mower-list/mower-list.component';
import { MowerMapComponent } from './mower-detail/mower-map/mower-map.component';
import { MowerRoutingModule } from './mower-routing.module';
import { MowerStartComponent } from './mower-start/mower-start.component';
import { MowersComponent } from './mowers.component';

@NgModule({
  declarations: [MowersComponent, MowerListComponent, MowerItemComponent, MowerStartComponent, MowerDetailComponent, MowerMapComponent],
  imports: [
    CommonModule,
    MowerRoutingModule,
    SharedModule,
    LeafletModule
  ]
})
export class MowersModule { }
