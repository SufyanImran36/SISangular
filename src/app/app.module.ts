import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentSectionComponent } from './parent-section/parent-section.component';

import { FormsModule } from '@angular/forms';
import { StudentSectionComponent } from './student-section/student-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { NgxPaginationModule } from 'ngx-pagination';








@NgModule({
  declarations: [
    AppComponent,
    ParentSectionComponent,
    StudentSectionComponent,
   
    
    // routingComponents ADD this to simplify list of all components, remove above component if your using this.
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2OrderModule,
    NgxPaginationModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
