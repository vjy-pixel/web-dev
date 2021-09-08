import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComps/about/about.component';
import { TodosComponent } from './MyComps/todos/todos.component';


const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component:TodosComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
