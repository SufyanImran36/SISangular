import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentSectionComponent } from './parent-section/parent-section.component';

import { FormsModule } from '@angular/forms';
import { StudentSectionComponent } from './student-section/student-section.component';
import { SearchfilterPipe } from './searchfilter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ParentSectionComponent,
    StudentSectionComponent,
    SearchfilterPipe,
    // routingComponents ADD this to simplify list of all components, remove above component if your using this.
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
