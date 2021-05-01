import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url:string="http://localhost:40913/api/Stores";
  constructor(private http:HttpClient) { }
  getStores():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  addStore(store:any)
  {
    return this.http.post(this.url,store);
  }
}
