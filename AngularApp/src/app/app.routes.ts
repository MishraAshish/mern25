import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./components/home/home').then(m => m.Home) },
    { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About) }
];