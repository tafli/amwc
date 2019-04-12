import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Mower } from './../mower.model';
import { MowerService } from './../mower.service';

@Component({
  selector: 'app-mower-list',
  templateUrl: './mower-list.component.html',
  styleUrls: ['./mower-list.component.css']
})
export class MowerListComponent implements OnInit {

  mowers: Observable<Mower[]>;

  constructor(private mowerService: MowerService) {}

  ngOnInit() {
    this.mowers = this.mowerService.mowersObservable;
  }
}
