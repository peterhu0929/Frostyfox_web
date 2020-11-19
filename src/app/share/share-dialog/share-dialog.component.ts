import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShareDialogComponent>, // 呼叫dialog方法
    @Inject(MAT_DIALOG_DATA)
    public data: any) { }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close(); // 關閉dialog function
  }
}
