import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MowerStatus } from '../mower.model';
import { MowerService } from '../mower.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mower-detail',
  templateUrl: './mower-detail.component.html',
  styleUrls: ['./mower-detail.component.css']
})
export class MowerDetailComponent implements OnInit {
  mowerStatus: MowerStatus;
  id: string;

  constructor(
    private mowerService: MowerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log('ID: ', this.id);

      this.mowerService
        .getMowerStatus(this.id)
        .subscribe((status: MowerStatus) => {
          this.mowerStatus = status;
        });
    });
  }
}
