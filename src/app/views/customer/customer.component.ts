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
  Madhsuha: any = "Madhusha Prasad";
  inputValue: any = "Welcome to the angular tute";

  constructor(private router: Router, private actRouter: ActivatedRoute) {
    // this.id = this.actRouter.snapshot.paramMap.get('id');
    // this.name = this.actRouter.snapshot.paramMap.get('name');

    this.actRouter.paramMap.subscribe((v) => {
      this.id = v.get("id");
      this.name = v.get("name");
    });
  }

  ngOnInit(): void {
  }

  navigateToItem() {
    // this.router.navigate(['/item']);
    this.router.navigate(['/item'],
      {
        queryParams: {
          id: "C001",
          name: "Customer 01"
        }
      });
  }

  getText(txtInput: HTMLInputElement) {
    console.log(txtInput.value + "hello")
    this.Madhsuha = txtInput.value;
  }
}
