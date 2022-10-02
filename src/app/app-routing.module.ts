import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'account', loadChildren: () => import('./account/account.module').then(module => module.AccountModule), },
    { path: 'main', loadChildren: () => import('./main/main.module').then(module => module.MainModule), },
    { path: '**', redirectTo: 'account' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
