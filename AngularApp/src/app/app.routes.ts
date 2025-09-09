import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: 'home', loadComponent: () => import('./components/home/home').then(m => m.Home) },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: '**', loadComponent: () => import('./components/home/home').then(m => m.Home) },
];