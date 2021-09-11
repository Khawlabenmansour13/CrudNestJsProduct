import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Productervice } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number ;
  product : Product;
  constructor(private productServ : Productervice , private activateRouter : ActivatedRoute ,private router : Router) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    console.log("id = ",this.id);

    this.productServ.getProductById(this.id).subscribe(data => {

      this.product  = data ;

    } , error => {
      console.log("error occured ",error)
    });

  }

  updateproduct() {
    this.productServ.updateproduct(this.id, this.product)
      .subscribe(data => {

        console.log(data);
      })
    this.goToList();
  }


  onSubmit() {
    this.updateproduct();
  }


  goToList() {
    this.router.navigate(['']);

  }



}
