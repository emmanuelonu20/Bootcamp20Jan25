import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdfComponent } from './components/mdf/mdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentItemComponent } from './components/student-item/student-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MdfComponent,
    StudentsComponent,
    TeachersComponent,
    NotFoundComponent,
    StudentDetailsComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
