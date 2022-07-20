import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RepoComponent } from "./repo/repo.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "repo",
    component: RepoComponent
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
