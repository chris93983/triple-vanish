import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { RankComponent } from './components/rank/rank.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, },
    { path: 'rank', component: RankComponent, },
    { path: 'shop', component: ShopComponent, },
    { path: 'game', component: GameComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule { }
