import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-modification-utilisateur",
  templateUrl: "./modification-utilisateur.component.html",
  styleUrls: ["./modification-utilisateur.component.scss"],
})
export class ModificationUtilisateurComponent {
  idArticle: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.idArticle = params["id"]));
  }
}
