import { MowerService } from './../mower.service';
import { Mower } from './../mower.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mower-list',
  templateUrl: './mower-list.component.html',
  styleUrls: ['./mower-list.component.css']
})
export class MowerListComponent implements OnInit, OnDestroy {
  mowers: Mower[] = [];

  mowerSubscription: Subscription;

  constructor(private mowerService: MowerService) {}

  ngOnInit() {
    this.mowerSubscription = this.mowerService
      .loadMowers()
      .subscribe((mowers: Mower[]) => {
        this.mowers = mowers;
      });
  }

  ngOnDestroy(): void {
    this.mowerSubscription.unsubscribe();
  }
}
