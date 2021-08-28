import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentSectionComponent } from './parent-section/parent-section.component';
import { StudentSectionComponent } from './student-section/student-section.component';


const routes: Routes = [
  {path: '',redirectTo:'/Student',pathMatch:'full'},
  {path:'Parent',component:ParentSectionComponent},
  {path:'Student',component:StudentSectionComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ParentSectionComponent,StudentSectionComponent]
