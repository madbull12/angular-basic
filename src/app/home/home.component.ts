import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductComponent } from "../components/product/product.component";
import { Product } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private productService:ProductsService
  ){}

  public products: Product[] = []

  ngOnInit(){
    this.productService.getProducts('https://fakestoreapi.com/products').subscribe((products)=>{
      console.log(products)
      this.products = products
    })
  }
}
