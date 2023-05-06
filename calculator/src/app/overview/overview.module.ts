import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './component/overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: '', component: HeaderComponent}

]

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ]
})
export class OverviewModule { }
