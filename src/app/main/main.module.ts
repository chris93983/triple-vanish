import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MainRoutingModule } from './main-routing.module';

const components = [HomeComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MainRoutingModule, SharedModule],
    exports: [...components],
    providers: [],
})
export class MainModule { }
