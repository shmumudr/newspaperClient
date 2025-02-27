import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
const routeConfig: Routes = [
    {
        path: '', 
        component:LoginComponent,
        title: 'login page',
    }, 
    {
        path: 'dashboard',
        component:DashboardComponent,
        title: 'dashbord page'
    }
];

export default routeConfig;
