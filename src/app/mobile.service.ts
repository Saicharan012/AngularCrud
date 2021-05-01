import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  mobileEditList:any;
  constructor(private http:HttpClient) { }
  url:string="http://localhost:50282/api/Mobiles";
  getMobiles():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
  addMobiles(form:any)
  {
    return this.http.post(this.url,form);
  }
  deleteMobile(id:any)
  {
    return this.http.delete(this.url+"/"+id)
  }
  editMobile(id:any,form:any)
  {
    return this.http.put(this.url+"/"+id,form);
  }

}
