import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GestionUtilisateursComponent } from "./pages/administration/gestion-utilisateurs/gestion-utilisateurs.component";
import { ListeArticlesComponent } from "./pages/liste-articles/liste-articles.component";
import { DashboardComponent } from "./pages/administration/dashboard/dashboard.component";
import { AdminitrationComponent } from "./pages/administration/adminitration.component";
import { ModificationUtilisateurComponent } from "./pages/administration/gestion-utilisateurs/modification-utilisateur/modification-utilisateur.component";

@NgModule({
  declarations: [
    GestionUtilisateursComponent,
    ListeArticlesComponent,
    DashboardComponent,
    AppComponent,
    AdminitrationComponent,
    ModificationUtilisateurComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
