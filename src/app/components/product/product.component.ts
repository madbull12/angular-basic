import { Component, Input } from '@angular/core';
import { Product } from '../../../types';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!:Product
 }
