import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-edit-mobile',
  templateUrl: './edit-mobile.component.html',
  styleUrls: ['./edit-mobile.component.css']
})
export class EditMobileComponent implements OnInit {

  mobileForm: FormGroup;
  mobileForm1: any;
  constructor(private service: MobileService, private fb: FormBuilder, private route: Router) {
    this.mobileForm = this.fb.group({
      mobileImeIID: [{ value: '', disabled: true }],
      mobilePrice: ['', [Validators.required]],
      modelName: ['', [Validators.required]],
      storeId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.mobileForm1 = this.service.mobileEditList
  }
  onSubmit() {
    this.service.editMobile(this.mobileForm.get('mobileImeIID')?.value, this.mobileForm.getRawValue()).subscribe(res => {
      console.log("Updated!"), this.route.navigate(['mobile'])
    })
  }

}
