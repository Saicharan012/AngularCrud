import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileService } from './mobile.service';
import { MobileComponent } from './mobile/mobile.component';
import { StoreService } from './store.service';
import { StoreComponent } from './store/store.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { EditMobileComponent } from './edit-mobile/edit-mobile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStoreComponent } from './add-store/add-store.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    StoreComponent,
    AddMobileComponent,
    EditMobileComponent,
    AddStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [StoreService, MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
