import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../mobile.service';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  displayedColumns: string[] = ['mobileImeIID', 'modelName', 'mobilePrice', 'storeId','Actions'];
  mobileList: any;
  dataSource:any;
  showSpinner = false;
  constructor(private service: MobileService, private route: Router) { }
  async ngOnInit() {
    this.showSpinner = true;
    console.log('before delay')
    await this.delay(1500);
    this.showSpinner = false;
    console.log('after delay')
    this.service.getMobiles().subscribe(res => {
    this.dataSource = res
    })
    console.log(this.dataSource)
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  editMobile(mobile: any) {
    this.service.mobileEditList = mobile
    this.route.navigate(['editmobile', mobile.mobileImeIID])
  }
  deleteMobile(id: any) {
    this.service.deleteMobile(id).subscribe(res => { console.log("Deleted!"), this.ngOnInit() });
  }
  addEmployee() {
    this.route.navigate(['addmobile'])
  }
}
