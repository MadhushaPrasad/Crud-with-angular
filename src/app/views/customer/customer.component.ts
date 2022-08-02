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
  titleStyle = "green";
  isDisplayContent: boolean = false;
  customerName: any;
  customerID: any;
  customerAddress: any;
  customers: any [] = [
    {id: "001", name: "Madhsuha Prasad", address: "Kalutara"},
    {id: "002", name: "Silva A.D.M.P.", address: "Colombo"}
  ];

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

  saveCustomer() {
    const newCustomer = {id: this.customerID, name: this.customerName, address: this.customerAddress}
    this.customers.push(newCustomer);
    this.customerID = "";
    this.customerName = "";
    this.customerAddress = "";
  }
}
