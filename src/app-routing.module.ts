//Modules
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

//Component
import {BugListComponent} from './bugs/bug-list/bug-list.component'

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: BugListComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}