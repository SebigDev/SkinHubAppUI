import { NgModule } from "@angular/core";
import { ContentComponent } from "./content.component";
import { GenderComponent } from "./genderType/gender.component";
import { Routes, RouterModule } from "@angular/router";
import { ColorComponent } from "./colorType/color.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MenComponent } from "./genderType/men/men.component";
import { WomenComponent } from "./genderType/women/women.component";
import { KiddiesComponent } from "./genderType/kiddies/kiddies.component";




const routes: Routes = [
      {
        "path": "gendertype",
        "component": GenderComponent,
      },
      {
        "path": "colortype",
        "component": ColorComponent,
       },
      {
        "path": "mencategories",
        "component": MenComponent,
      },
      {
        "path": "womencategories",
        "component": WomenComponent,
      },
      {
        "path": "kiddiescategories",
        "component": KiddiesComponent,
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full'
      }
];


@NgModule({

  declarations: [
    ContentComponent,
    GenderComponent,
    ColorComponent,
    MenComponent,
    WomenComponent,
    KiddiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    RouterModule
  ],

})
export class ContentModule { }
