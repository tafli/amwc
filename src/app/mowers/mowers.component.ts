import { MowerService } from './mower.service';
import { Component, OnInit } from '@angular/core';
import { Mower } from './mower.model';

@Component({
  selector: 'app-mowers',
  templateUrl: './mowers.component.html',
  styleUrls: ['./mowers.component.css']
})
export class MowersComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
