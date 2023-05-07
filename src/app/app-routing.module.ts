import { ListeArticlesComponent } from "./pages/liste-articles/liste-articles.component";
import { AdminitrationComponent } from "./pages/administration/adminitration.component";
import { GestionUtilisateursComponent } from "./pages/administration/gestion-utilisateurs/gestion-utilisateurs.component";
import { DashboardComponent } from "./pages/administration/dashboard/dashboard.component";
import { ModificationUtilisateurComponent } from "./pages/administration/gestion-utilisateurs/modification-utilisateur/modification-utilisateur.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "liste-articles", component: ListeArticlesComponent },
  {
    path: "administration",
    component: AdminitrationComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "gestion-utilisateurs", component: GestionUtilisateursComponent },
      {
        path: "gestion-utilisateurs/modifier/:id",
        component: ModificationUtilisateurComponent,
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  { path: "", redirectTo: "liste-articles", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
