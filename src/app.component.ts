//Component
import { Component } from '@angular/core';

@Component({
    selector: 'my-app', //The name of the html element 
    template: `
    <navbar></navbar>
    <div class="container">
    <router-outlet></router-outlet>
    </div>
    `,//Tells the router where to display the component
    styles: [`
        .container{
            margin-top: 1.5rem;
        }
    `]
})

export class AppComponent { }