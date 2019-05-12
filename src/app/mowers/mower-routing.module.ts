import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { MowerDetailComponent } from './mower-detail/mower-detail.component';
import { MowerStartComponent } from './mower-start/mower-start.component';
import { MowersComponent } from './mowers.component';

const routes: Routes = [
  {
    path: '',
    component: MowersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: MowerDetailComponent,
        canActivate: [AuthGuard]
      },
      { path: '', component: MowerStartComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class MowerRoutingModule {}
