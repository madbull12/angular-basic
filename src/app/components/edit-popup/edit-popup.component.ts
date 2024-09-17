import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule,FormsModule,CommonModule,ButtonModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Output() confirm = new EventEmitter<Product>();
  @Output() displayChange = new EventEmitter<boolean>();
  @Input() header!:string;
  @Input() product: Product = {
    id: "",
    title: "",
    description: "",
    category: "",
    image: "",
    price: "",

  }

  onConfirm() {
    this.confirm.emit(this.product)
  }

  onCancel() {
    this.display = false;
  }
}
