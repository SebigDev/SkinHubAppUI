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
import { ProductCategoryComponent } from "./product-categories/product-category.component";
import {PostComponent} from "./posts/post.component";




// @ts-ignore
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
        "path": "products",
        "component": PostComponent
      },
      {
        "path": "productcategory/:id",
        "component": ProductCategoryComponent
      },
      {
        "path": "post/:id",
        "component": PostComponent
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
    KiddiesComponent,
    ProductCategoryComponent,
    PostComponent

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
