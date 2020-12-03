import { ShareDialogService } from './../../share/share-dialog/share-dialog.service';
import { ProgramsService } from './../programs.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public fb: FormBuilder,
    private programService: ProgramsService,
    private _dialog: MatDialog,
    private shareDialogService: ShareDialogService) { }
  newItemForm: FormGroup;
  selectItemForm: FormGroup;
  public products: Array<Product> = new Array<Product>();
  // DrinkTypeList = [
  //   { ItemText: '精選 ', ItemValue: 1 },
  //   { ItemText: '特調', ItemValue: 2 },
  //   { ItemText: '牛奶', ItemValue: 3 },
  //   { ItemText: '水果特調', ItemValue: 4 },
  //   { ItemText: '無酒精飲料', ItemValue: 5 },
  //   { ItemText: '芒果冰', ItemValue: 6 },
  //   { ItemText: '雞蛋仔', ItemValue: 7 }];

  ngOnInit(): void {
    this.initNewForm();
    this.getProduct();
  }
  initNewForm() {
    this.newItemForm = this.fb.group({
      ID: [111],
      NAME: ['', [Validators.required]],
      TYPE: ['', [Validators.required]],
      PRICE: [Validators.required],
      SWEETNESS: ['false'],
    });
    this.selectItemForm = this.fb.group({
      ID: [null],
      NAME: ['', [Validators.required]],
      TYPE: ['', [Validators.required]],
      PRICE: [Validators.required],
      SWEETNESS: [],
    });
  }
  createData(value?: Product) {
    console.log(value);
    // var targetData = this.products;
    // if (targetData.findIndex(x => x.id === value.id) > -1) {
    //   this.shareDialogService.openShareDialog('該筆已存在，請重新執行!');
    //   return;
    // }
    // value.id = this.programService.genProductID();
    // value.SWEETNESS = false;
    // const create$ = of(targetData.unshift(value));
    // create$.subscribe(() => this.shareDialogService.openShareDialog('新增成功'));
    console.log(value);
    this.programService.addProduct(value).subscribe((response: any) => {
      // console.log(response);
      this.programService.OpenSanckBar(response.name, '新增成功');
      this.getProduct();
    }, (error: HttpErrorResponse) => {
      this.programService.HandleError(error);
    });
  }
  getProduct() {
    this.programService.getDemoProduct().subscribe(
      (res: Array<Product>) => {
        if (res) {
          // console.log(res);
          // this.products = new Array<Product>();
          this.products = res;
          console.log(this.products);
        }
      }, (error: HttpErrorResponse) => alert('call error')
    );
  }
  selectRecord(selectItem: Product) {
    console.log(selectItem);
    this.selectItemForm.get('ID').setValue(selectItem.ID);
    this.selectItemForm.get('NAME').setValue(selectItem.NAME);
    this.selectItemForm.get('TYPE').setValue(selectItem.TYPE);
    this.selectItemForm.get('PRICE').setValue(selectItem.PRICE);
    this.selectItemForm.get('SWEETNESS').setValue(selectItem.SWEETNESS);
    // console.log(this.selectItemForm.value);
    this.openUpdateDialog(this.selectItemForm);
  }
  openUpdateDialog(selectItem: FormGroup) {
    console.log(selectItem.value);
    const dialogRef = this._dialog.open(ProductEditComponent, {
      width: '800px',
      data: {
        selectedViewItem: selectItem,
        actionFlag: 'Update'
      },
      disableClose: false // focus or not
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.Status) {
        this.updateData(result.UpdateData);
      } else {
        console.log('nothing');
      }
    });
    // this.shareDialogService.openShareDialog('Test');
  }
  openCreateDialog() {
    this.initNewForm();
    const dialogRef = this._dialog.open(ProductEditComponent, {
      width: '800px',
      data: {
        selectedViewItem: this.newItemForm,
        actionFlag: 'Create'
      },
      disableClose: false // focus or not
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.Status) {
        this.createData(result.UpdateData);
      } else {
        console.log('nothing');
      }
    });
  }
  updateData(value: Product) {
    console.log(value);
    // var targetData = this.products;
    // const UpdateIdx = targetData.findIndex(x => x.id === value.ID);
    // const update$ = of(targetData.splice(UpdateIdx, 1, value));
    // update$.subscribe(() => this.shareDialogService.openShareDialog('修改成功'));
    this.programService.updateProduct(value).subscribe((response: any) => {
      this.programService.OpenSanckBar(response.name, '更新成功');
      this.getProduct();
    }, (error: HttpErrorResponse) => {
      this.programService.HandleError(error);
    });
  }
  deleteData(ProductID) {
    console.log(ProductID);
    // var targetData = this.products;
    // const DelIdx = targetData.findIndex(x => x.id === value);
    // const delete$ = of(targetData.splice(DelIdx, 1));
    // delete$.subscribe(() => this.shareDialogService.openShareDialog('刪除成功'));
    this.programService.delProduct(ProductID).subscribe((response: any) => {
      this.programService.OpenSanckBar(null, '刪除成功');
      this.getProduct();
    }, (error: HttpErrorResponse) => {
      this.programService.HandleError(error);
    });
  }
}
