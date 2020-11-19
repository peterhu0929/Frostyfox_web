import { ProgramsService } from './../programs.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private programService: ProgramsService) { }
  public products: any;
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.programService.getProduct().subscribe((res: any) => {
      if (res.length > 0) {
        this.products = res;
      }
    }, (error: HttpErrorResponse) => alert('call error')
    );
  }
}
