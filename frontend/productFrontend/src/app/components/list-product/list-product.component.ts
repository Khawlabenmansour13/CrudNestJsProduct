import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Productervice } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {


  products : Product[];
  constructor(private productServ : Productervice, private  router : Router,private activateRouter :ActivatedRoute) { }

  ngOnInit(): void {

    this.getProducts();

  }

  goToUpdateComponent(id : number) {
    this.router.navigate(['update', id])
  }


  gotoDetailComponent(id:number) {
    this.router.navigate(['detail', id])

  }
  getProducts() {
    this.productServ.getProductList().subscribe(data => {

      this.products = data;
    } )
  }

  deleteProduct(id:number) {


    if( confirm("Voullez vous supprimer cette Product ")) {
      this.productServ.deleteproduct(id).subscribe(data=> {
      });
     window.location.reload();

    }

  }
}