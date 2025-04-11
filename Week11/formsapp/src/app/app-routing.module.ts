import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { MdfComponent } from './components/mdf/mdf.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'mdf', pathMatch: 'full'},
  {path: 'students', component: StudentsComponent},
  {path: 'student-details/:student_id', component: StudentDetailsComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'mdf', component: MdfComponent},
  {path: 'create-student', component: StudentFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
