import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Productervice } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  id: number ;
  product : Product;
  constructor(private Producterv : Productervice , private activateRouter : ActivatedRoute ,private router : Router) { }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    console.log("id = ",this.id);

    this.Producterv.getProductById(this.id).subscribe(data => {

      this.product  = data ;

    } , error => {
      console.log("error occured ",error)
    });

  }
}
