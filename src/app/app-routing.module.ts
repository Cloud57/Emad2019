import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./genericPackage/page/auth/login/login.module').then(m => m.LoginPageModule),
  },
  { path: 'register', loadChildren: './genericPackage/page/auth/register/register.module#RegisterPageModule' },
  { path: 'doctor-home', loadChildren: './dottorePackage/page/doctor-home/doctor-home.module#DoctorHomePageModule' },
  { path: '', loadChildren: './dottorePackage/page/nuovoPaziente/tabs/tabs.module#TabsPageModule'},
  { path: '', loadChildren: './dottorePackage/page/nuovoPaziente/tabs/tabs.module#TabsPageModule'},
  { path: 'new-task', loadChildren: './dottorePackage/page/new-task/new-task.module#NewTaskPageModule' },
  { path: 'com-problema', loadChildren: './genericPackage/page/paziente/com-problema/com-problema.module#ComProblemaPageModule' },
  { path: '', loadChildren: './genericPackage/page/paziente/com-problema/new-com-problema/new-com-problema.module#NewComProblemaPageModule' },
  { path: '', loadChildren: './genericPackage/page/paziente/task/tabs-task/tabs-task.module#TabsTaskPageModule' },
  { path: 'alleanza', loadChildren: './genericPackage/page/alleanza/alleanza.module#AlleanzaPageModule' },
  { path: 'paziente-home', loadChildren: './pazientePackage/page/paziente-home/paziente.module#PazientePageModule' },
  { path: 'membro-alleanza', loadChildren: './genericPackage/page/alleanza/membro-alleanza/membro-alleanza.module#MembroAlleanzaPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
