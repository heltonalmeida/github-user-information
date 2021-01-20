import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersHomeComponent } from './users-home/users-home.component';
import { UsersRepositoryComponent } from './users-repository/users-repository.component';
import { UsersStarredComponent } from './users-starred/users-starred.component';

const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: UsersHomeComponent },
    { path: ':username/repository', component: UsersRepositoryComponent },
    { path: ':username/starred', component: UsersStarredComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UsersRouting { }