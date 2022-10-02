import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';

const components = [LoginComponent];

@NgModule({
    declarations: [...components],
    exports: [...components],
    imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule { }
