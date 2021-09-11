import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Productervice {

  private  baseUrl ="http://localhost:9000/Products/";
  private urlgetAllProduct ="getall";
  private urladdProduct = "addProduct";
  private urlDeleteProduct ="deleteProduct"
  private urlUpdateProduct ="updateProduct"
  private urlgetByIdProduct ="getProduct"
  constructor(private client : HttpClient) { }


  getProductList() : Observable<Product[]> {

    return this.client.get<Product[]>(`${this.baseUrl}`+`${this.urlgetAllProduct}`);

  }
  createproduct(product : Product) : Observable<Object>{
    return  this.client.post(`${this.baseUrl}`+`${this.urladdProduct}`,product);

   }

  deleteproduct(id : number) : Observable<Object> { // object car  msg de ResponseEntity  cest un object
    return this.client.delete(`${this.baseUrl}` + `${this.urlDeleteProduct}/${id}` );
  }


  updateproduct(id : number , product : Product) : Observable<Object> { // object car  msg de ResponseEntity  cest un object
    return this.client.put(`${this.baseUrl}` + `${this.urlUpdateProduct}/${id}`, product );
  }
  getProductById(id : number) : Observable<Product> {

    return this.client.get<Product>(`${this.baseUrl}` + `${this.urlgetByIdProduct}/${id}` );

  }




}