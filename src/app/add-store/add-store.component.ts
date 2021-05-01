import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  storeForm: any
  constructor(private fb: FormBuilder, private service: StoreService,private route:Router) { }

  ngOnInit(): void {
    this.storeForm = this.fb.group({
      storeId: ['', [Validators.required]],
      storeName: ['', [Validators.required]],
      storeLocation: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.service.addStore(this.storeForm.getRawValue()).subscribe(res=>
      {
        console.log("Added!"),this.route.navigate(['store'])
      })
  }

}
