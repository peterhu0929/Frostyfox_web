import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ShareDialogComponent } from './share-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ShareDialogService {

  constructor(public dialog: MatDialog) {
  }
  public openShareDialog(pContent?: any): void {
    const dialogRef = this.dialog.open(ShareDialogComponent, {
      width: '600px',
      data: { content: pContent }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(pContent);
    });
  }
}
