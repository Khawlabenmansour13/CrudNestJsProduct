import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Productervice } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService :Productervice, private router : Router) { }

  product : Product = new Product();
  ngOnInit(): void {
  }

  saveProduct() {
    this.productService.createproduct(this.product).subscribe(data => {
      console.log(data);

    });



  }

  submitPRoduct(){
    this.saveProduct();
    this.router.navigate(['']);
  }

}
