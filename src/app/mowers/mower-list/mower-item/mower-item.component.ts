import { Mower } from '../../mower.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mower-item',
  templateUrl: './mower-item.component.html',
  styleUrls: ['./mower-item.component.css']
})
export class MowerItemComponent implements OnInit {
  @Input() mower: Mower;
  @Input() index: number;

  ngOnInit() {
  }

}
