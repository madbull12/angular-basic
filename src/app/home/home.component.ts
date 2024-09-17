import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductComponent } from "../components/product/product.component";
import { Product } from '../../types';
import { EditPopupComponent } from "../components/edit-popup/edit-popup.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, EditPopupComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private productService: ProductsService
  ) { }

  products: Product[] = []
  displayEditPopup: boolean = false;
  displayAddPopup: boolean = false;


  toggleEditPopup(product: Product) {
    this.selectedProduct = product;
    this.displayEditPopup = true;
  }

  toggleDeletePopup(product: Product) {
    if (!product.id) {
      return;
    }

    this.deleteProduct(product.id);
  }

  toggleAddPopup() {
    this.displayAddPopup = true;
  }
  selectedProduct: Product = {
    id: '',
    title: '',
    image: '',
    price: '',
    category: "",
    description: ""
  };
  onConfirmEdit(product: Product) {
    if (!this.selectedProduct.id) {
      return;
    }

    this.editProduct(product, this.selectedProduct.id);
    this.displayEditPopup = false;
  }

  onConfirmAdd(product: Product) {
    this.addProduct(product);
    this.displayAddPopup = false;
  }

  fetchProducts() {
    this.productService
      .getProducts('http://localhost:3000/clothes')
      .subscribe({
        next: (data: Product[]) => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  editProduct(product: Product, id: string) {
    this.productService
      .editProduct(`http://localhost:3000/clothes/${id}`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts()
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  deleteProduct(id: string) {
    this.productService
      .deleteProduct(`http://localhost:3000/clothes/${id}`)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts()

        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  addProduct(product: Product) {
    this.productService
      .addProduct(`http://localhost:3000/clothes`, product)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.fetchProducts();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit() {
    this.productService.getProducts('https://fakestoreapi.com/products').subscribe((products) => {
      console.log(products)
      this.products = products
    })
  }
}
