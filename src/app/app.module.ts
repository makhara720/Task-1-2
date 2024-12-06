import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { ParentComponent } from './parent/parent.component';
import { HighlightUrgentDirective } from './highlight-urgent.directive';
import { HeaderComponent } from './header/header.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const component = [
  AppComponent,
  TaskItemComponent,
  ParentComponent,
  HighlightUrgentDirective,
  HeaderComponent,
  ProductReviewComponent
]

@NgModule({
  declarations: [
    ...component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
