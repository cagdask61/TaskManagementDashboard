import { Routes } from "@angular/router";


const AUTH_ROUTES: Routes = [
    { path: 'login', loadComponent: () => import('./login/login.component') },
    { path: '', redirectTo: 'login', pathMatch: "full" }
];

export default AUTH_ROUTES;