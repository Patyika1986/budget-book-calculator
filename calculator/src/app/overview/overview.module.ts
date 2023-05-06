import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './component/overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: '', component: HeaderComponent}

]

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    MainComponent
  ]
})
export class OverviewModule { }
