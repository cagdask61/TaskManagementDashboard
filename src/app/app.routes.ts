import { Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component'), loadChildren: () => import('./pages/dashboard/dashboard.routes') },
    { path: 'auth', loadComponent: () => import('./pages/auth/auth.component'), loadChildren: () => import('./pages/auth/auth.routes') },
    { path: '', redirectTo: 'auth', pathMatch: "full" },
    { path: '**', loadComponent: () => import('./pages/common/not-found/not-found.component') }
];


export default APP_ROUTES;