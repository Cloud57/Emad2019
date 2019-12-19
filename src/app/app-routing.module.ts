import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './nuovoPaziente/tabs/tabs.page';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule),
  },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'doctor-home', loadChildren: './doctor-home/doctor-home.module#DoctorHomePageModule' },
  { path: '', loadChildren: './nuovoPaziente/tabs/tabs.module#TabsPageModule'},
  { path: '', loadChildren: './nuovoPaziente/tabs/tabs.module#TabsPageModule'},
  { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  { path: 'com-problema', loadChildren: './paziente/com-problema/com-problema.module#ComProblemaPageModule' },
  { path: '', loadChildren: './paziente/com-problema/new-com-problema/new-com-problema.module#NewComProblemaPageModule' },
  { path: '', loadChildren: './paziente/task/tabs-task/tabs-task.module#TabsTaskPageModule' },
  { path: 'alleanza', loadChildren: './alleanza/alleanza.module#AlleanzaPageModule' },
  { path: 'paziente-home', loadChildren: './paziente-home/paziente.module#PazientePageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
