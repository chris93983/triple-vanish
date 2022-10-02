import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { RankComponent } from './components/rank/rank.component';
import { ShopComponent } from './components/shop/shop.component';
import { MainRoutingModule } from './main-routing.module';

const components = [HomeComponent, RankComponent, ShopComponent, GameComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MainRoutingModule, SharedModule],
    exports: [...components],
    providers: [],
})
export class MainModule { }
