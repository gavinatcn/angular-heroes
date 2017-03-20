import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from'@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from "./heroes/hero-detail.component";
import {HeroesListComponent} from "./heroes/heroes-list.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./heroes/hero.service";
import {AppRoutingModule} from "./app-routing.module";
import {HeroSearchComponent} from "./heroes/hero-search.component";

import './rxjs-extensions';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesListComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ HeroService ]
})


export class AppModule { }
