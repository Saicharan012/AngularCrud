import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { EditMobileComponent } from './edit-mobile/edit-mobile.component';
import { MobileComponent } from './mobile/mobile.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path:"mobile",
    component:MobileComponent
  },
  {
    path:"store",
    component:StoreComponent
  },
  {
    path:'editmobile/:id',
    component:EditMobileComponent
  },
  {
    path:'addmobile',
    component:AddMobileComponent
  },
  {
    path:'addstore',
    component:AddStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
