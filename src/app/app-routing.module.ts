import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  { 
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  { 
    path: 'Formulaire',
    loadChildren: () => import('./form/form.module').then(mod => mod.FormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
