import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {
  mobileForm:FormGroup
  constructor(private fb:FormBuilder,private service:MobileService,private route:Router) { }
  models: any[] = [
    {value: 'Apple', viewValue: 'Apple'},
    {value: 'One Plus', viewValue: 'One Plus'},
    {value: 'Samsung', viewValue: 'Samsung'},
    {value: 'Poco', viewValue: 'Poco'},
    {value: 'Nokia', viewValue: 'Nokia'},
    {value: 'Lenovo', viewValue: 'Lenovo'},
    {value: 'Vivo', viewValue: 'Vivo'}
  ];
  ngOnInit(): void {
   this.mobileForm=this.fb.group({
    mobileImeIID:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
    mobilePrice:['',[Validators.required]],
    modelName:['',[Validators.required]],
    storeId:['',[Validators.required]]
   });
  }

  onSubmit()
  {
     this.service.addMobiles(this.mobileForm.getRawValue()).subscribe(res=>{
       console.log("Details Added!"),this.route.navigate(['mobile'])
     })
  }
}
