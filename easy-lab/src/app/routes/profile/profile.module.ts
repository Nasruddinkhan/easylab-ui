import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileSettingsComponent } from './settings/settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const COMPONENTS = [ ProfileSettingsComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, ProfileRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ChangePasswordComponent],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class ProfileModule {}
