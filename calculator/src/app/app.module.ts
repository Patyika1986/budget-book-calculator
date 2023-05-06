import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/component/overview/overview.component';
import { RouterModule } from '@angular/router';
import { OverviewModule } from "./overview/overview.module";

@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OverviewModule
    ]
})
export class AppModule { }
