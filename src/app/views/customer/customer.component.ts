import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

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
  customers: any [] = [];

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

  saveCustomer(formData: NgForm) {
    const newCustomer = formData.form.value;
    console.log(formData.form.value);

    this.customers.push(newCustomer);
    this.customerID = "";
    this.customerName = "";
    this.customerAddress = "";

    console.log(formData);
  }
}
