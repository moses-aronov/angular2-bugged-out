import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//Boiler Plate NgModule

@NgModule(
    {
        imports: [ 
            SharedModule
        ],
        declarations: [ ],
        bootstrap: [ ],
        exports: [ ],
        providers: [ ] 
    }
)

export class BugModule {

}