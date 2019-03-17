import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    images = [
        './assets/img/NDF-example-1.png',
        './assets/img/NDF-example-2.png',
        './assets/img/bandman-overview.png',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
