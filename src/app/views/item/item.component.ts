import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: any = '';
  name: any = '';

  constructor(private actRouter: ActivatedRoute) {
    this.id = this.actRouter.snapshot.queryParamMap.get('id');
    this.name = this.actRouter.snapshot.queryParamMap.get('name');
  }

  ngOnInit(): void {
  }

}
