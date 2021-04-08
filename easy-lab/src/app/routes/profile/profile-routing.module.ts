import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileSettingsComponent } from './settings/settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [

   
      {
        path: 'settings',
        component: ProfileSettingsComponent,
        data: { title: 'Profile Settings' },
      },
      {
        path: 'changepaasword',
        component: ChangePasswordComponent
      },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
