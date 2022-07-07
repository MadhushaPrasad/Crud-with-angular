import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  id: any = '';
  name: any = '';

  constructor(private router: Router, private actRouter: ActivatedRoute) {
    this.id = this.actRouter.snapshot.paramMap.get('id');
    this.name = this.actRouter.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
  }

  navigateToItem() {
    this.router.navigate(['/item']);
  }
}
