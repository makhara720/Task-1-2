import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path:'',
    component:ParentComponent

  },
  {
    path: 'Task2',
    component: ProductReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
