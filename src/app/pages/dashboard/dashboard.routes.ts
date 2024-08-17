import { Routes } from "@angular/router";


const DASHBOARD_ROUTES: Routes = [
    { path: 'overview', loadComponent: () => import('./overview/overview.component') },
    { path: 'task', loadComponent: () => import('./task/task.component') },
    { path: '', redirectTo: 'overview', pathMatch: "full" },
];

export default DASHBOARD_ROUTES;