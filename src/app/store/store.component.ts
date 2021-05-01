import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private service:StoreService,private route:Router) { }
  storeList:any
  ngOnInit(): void {
     this.service.getStores().subscribe(res=>{
       this.storeList=res
     })
  }

  addStore()
  {
    this.route.navigate(['addstore'])
  }
}
