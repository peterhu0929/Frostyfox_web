import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  constructor(public fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  newItemForm: FormGroup;
  DrinkTypeList = [
    { ItemText: '精選 ', ItemValue: 1 },
    { ItemText: '特調', ItemValue: 2 },
    { ItemText: '牛奶', ItemValue: 3 },
    { ItemText: '水果特調', ItemValue: 4 },
    { ItemText: '無酒精飲料', ItemValue: 5 },
    { ItemText: '芒果冰', ItemValue: 6 },
    { ItemText: '雞蛋仔', ItemValue: 7 }];

  ngOnInit(): void {
    this.newItemForm = this.data.selectedViewItem;
    console.log(this.newItemForm.value);
  }

  // initNewForm() {
  //   this.newItemForm = this.fb.group({
  //     id: [null],
  //     name: ['', [Validators.required]],
  //     type: ['', [Validators.required]],
  //     price: [Validators.required],
  //     sweetness: []
  //   });
  // }

  onSubmit(value?: any) {
    this.dialogRef.close({ Status: true, UpdateData: this.newItemForm.value });
  }
  onNoClick(): void {
    this.dialogRef.close({ Status: false });
  }
}
