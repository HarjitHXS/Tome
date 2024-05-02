import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  standalone: true,
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {

  constructor(public dialog: MatDialog) {}

  openRegistrationDialog(): void {
    this.dialog.open(AnnouncementsComponentDialog);
  }

}

@Component({
  selector: 'app-announcements-dialog',
  template: `
    <h2>Registration</h2>
    <p>Thank you you will receive email </p>
    <button mat-button (click)="onCloseClick()">Close</button>
  `,
  imports: [
    MatButton
  ],
  standalone: true
})
export class AnnouncementsComponentDialog {

  constructor(private dialogRef: MatDialogRef<AnnouncementsComponentDialog>) { }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
