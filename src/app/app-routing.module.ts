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
  { path: 'lista-task', loadChildren: './genericPackage/page/paziente/lista-task/lista-task.module#ListaTaskPageModule' },
  { path: 'profilo-paziente', loadChildren: './genericPackage/page/paziente/profilo-paziente/profilo-paziente.module#ProfiloPazientePageModule' },
  { path: 'storico', loadChildren: './genericPackage/page/paziente/storico/storico.module#StoricoPageModule' },
  { path: '', loadChildren: './genericPackage/page/paziente/dettagli-Task/tabs-dettagli-task/tabs-dettagli-task.module#TabsDettagliTaskPageModule' },
  { path: 'modal', loadChildren: './dottorePackage/page/new-task/modal/modal.module#ModalPageModule' },
  { path: 'esecuzione-task', loadChildren: './genericPackage/page/paziente/esecuzione-task/esecuzione-task.module#EsecuzioneTaskPageModule' },
  { path: 'dettagli-esecuzione-task', loadChildren: './genericPackage/page/paziente/dettagli-esecuzione-task/dettagli-esecuzione-task.module#DettagliEsecuzioneTaskPageModule' },
  { path: 'password-recovery', loadChildren: './genericPackage/page/auth/login/password-recovery/password-recovery.module#PasswordRecoveryPageModule' },
  { path: 'dettagli-comportamento-problema', loadChildren: './genericPackage/page/paziente/com-problema/dettagli-comportamento-problema/dettagli-comportamento-problema.module#DettagliComportamentoProblemaPageModule' },
  { path: 'modal-filtri', loadChildren: './genericPackage/page/paziente/com-problema/modal-filtri/modal-filtri.module#ModalFiltriPageModule' },
  { path: 'profilo-caregiver', loadChildren: './genericPackage/page/alleanza/profilo-caregiver/profilo-caregiver.module#ProfiloCaregiverPageModule' },
  { path: 'speech', loadChildren: './speech/speech.module#SpeechPageModule' },
  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
