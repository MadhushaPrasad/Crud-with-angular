import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

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

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl()
  });

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
    const newCustomer = this.form.value;
    this.customers.push(newCustomer);
    this.form.reset();
    console.log(this.form);
  }

  updateCustomer(customer: any) {
    console.log(customer)
  }
}
