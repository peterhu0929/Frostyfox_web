import { ShareDialogService } from './../../share/share-dialog/share-dialog.service';
import { Product } from './../../model/product';
import { ProgramsService } from './../programs.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public fb: FormBuilder,
    private programService: ProgramsService,
    private shareDialogService: ShareDialogService) { }
  newItemForm: FormGroup;

  public products: Array<Product> = new Array<Product>();
  DrinkTypeList = [
    { ItemText: '精選 ', ItemValue: 1 },
    { ItemText: '牛奶', ItemValue: 2 },
    { ItemText: '特調', ItemValue: 3 },
    { ItemText: '水果特調', ItemValue: 4 },
    { ItemText: '無酒精飲料', ItemValue: 5 },
    { ItemText: '芒果冰', ItemValue: 6 },
    { ItemText: '雞蛋仔', ItemValue: 7 }];

  ngOnInit(): void {
    this.initNewForm();
    this.getProduct();
  }
  initNewForm() {
    this.newItemForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      price: [Validators.required],
      sweetness: ['false'],
    });
  }
  onSubmit(value?: any) {
    console.log(value);
    var targetData = this.products;
    if (targetData.findIndex(x => x.id === value.id) > -1) {
      this.shareDialogService.openShareDialog('該筆已存在，請重新執行!');
      return;
    }
    value.id = this.programService.genProductID();
    targetData.unshift(value);
  }
  getProduct() {
    this.programService.getProduct().subscribe((res: any) => {
      if (res) {
        this.products = res;
        console.log(this.products);
      }
    }, (error: HttpErrorResponse) => alert('call error')
    );
  }
  openDialog() {
    this.shareDialogService.openShareDialog('Test');
  }
  deleteData(value) {
    console.log(value);
    var targetData = this.products;
    const DelIdx = targetData.findIndex(x => x.id === value);
    const delete$ = of(targetData.splice(DelIdx, 1));
    delete$.subscribe(() => this.shareDialogService.openShareDialog('刪除成功'));
    //
  }
}
