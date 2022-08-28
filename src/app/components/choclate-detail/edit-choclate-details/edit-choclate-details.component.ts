import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ChoclateService } from 'src/app/services/choclate.service';

export interface DialogData {
  id: string;
  name: string;
  brand: string;
}

@Component({
  selector: 'app-edit-choclate-details',
  templateUrl: './edit-choclate-details.component.html',
  styleUrls: ['./edit-choclate-details.component.scss'],
})
export class EditChoclateDetailsComponent implements OnInit {
  editDetailsForm: FormGroup = new FormGroup({
    name: new FormControl(this.data.name, [Validators.required]),
    brand: new FormControl(this.data.brand, [Validators.required]),
  });

  constructor(
    private service: ChoclateService,
    private fb: FormBuilder,
    public dialog: MatDialogRef<EditChoclateDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}


  savedetails() {
    let payload: DialogData = {
      id: this.data.id,
      name: this.editDetailsForm.controls['name'].value,
      brand: this.editDetailsForm.controls['brand'].value,
    };

    if (this.editDetailsForm.valid) {
      this.service.saveChoclateDetails(payload);

      // write check for successful post api
      this.dialog.close();
    }
  }
}
