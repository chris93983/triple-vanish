import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '**', redirectTo: 'account' },
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'account', loadChildren: () => import('./account/account.module').then(account => account.AccountModule), },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
