import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import {  NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/lists'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'new-list',
    component: NewListComponent
  },
  {
    path: 'lists/:listId/new-task',
    component: NewTaskComponent
  },
  {
    path: 'lists',
    component: TaskViewComponent
  },
  {
    path: 'lists/:listId',
    component: TaskViewComponent
  },
  {
    path: '**',
    redirectTo: 'lists'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
