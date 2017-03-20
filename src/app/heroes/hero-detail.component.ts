/**
 * Created by gavin on 2016/12/22.
 */

import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import {HeroService} from "./hero.service";

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{

    @Input() inputHero : Hero;

    hero : Hero;

    constructor(private heroService : HeroService,
                private route : ActivatedRoute,
                private location : Location) {};


    ngOnInit() : void {

        this.route.params
            .switchMap((params:Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);

    }

    goBack() : void {

        this.location.back();

    }

    save() : void {

        if(this.hero) {
            this.heroService.update(this.hero).then(() => this.goBack());
        }

        if(this.inputHero) {
            this.heroService.update(this.inputHero).then(() => this.goBack());
        }

    }

}
