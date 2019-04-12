import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MowerStatus } from '../mower.model';
import { MowerService } from '../mower.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mower-detail',
  templateUrl: './mower-detail.component.html',
  styleUrls: ['./mower-detail.component.css']
})
export class MowerDetailComponent implements OnInit {
  mowerStatus: BehaviorSubject<MowerStatus>;
  id: string;

  constructor(
    private mowerService: MowerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.mowerStatus = this.mowerService.mowerStatus;
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log('ID: ', this.id);

      this.mowerService.loadMowerStatus(this.id);
    });
  }
}
