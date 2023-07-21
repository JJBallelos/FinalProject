import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Tab1Page } from './tab1/tab1.page';

const routes: Routes = [
  
 {
    path: 'tabs',
    canActivate: [AuthGuard], // Check if user is logged in
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    component: Tab1Page
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-tenant',
    loadChildren: () => import('./add-tenant/add-tenant.module').then( m => m.AddTenantPageModule)
  },
  {
    path: 'delete-tenant',
    loadChildren: () => import('./delete-tenant/delete-tenant.module').then( m => m.DeleteTenantPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
