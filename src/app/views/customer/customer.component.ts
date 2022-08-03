import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
    id: new FormControl('', [Validators.required, Validators.pattern('(c00)[0-9]{1,2}'),
      Validators.minLength(4)],),
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
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
    console.log(this.form);
    // const newCustomer = this.form.value   ;
    // this.customers.push(newCustomer);
    // this.form.reset();
    // console.log(this.form);
  }

  updateCustomer(customer: any) {
    console.log(customer)
  }
}
