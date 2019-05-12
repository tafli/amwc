import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MowerService } from '../mower.service';

@Component({
  selector: 'app-mower-detail',
  templateUrl: './mower-detail.component.html',
  styleUrls: ['./mower-detail.component.css']
})
export class MowerDetailComponent {
  mowerStatus = this.mowerService.mowerStatus;
  id: string;

  constructor(
    private mowerService: MowerService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.mowerService.loadMowerStatus(this.id);
    });
  }
}
