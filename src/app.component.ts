//Component
import { Component } from '@angular/core';

@Component({
    selector: 'my-app', //The name of the html element 
    template: '<router-outlet></router-outlet>'//Tells the router where to display the component
})

export class AppComponent { }