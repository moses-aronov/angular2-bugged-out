import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

//Pipes
import {StatusPipe } from './pipe/status.pipe'
import { SeverityPipe } from './pipe/severity.pipe'
//Boiler Plate NgModule

@NgModule(
    {
        imports: [ CommonModule ],
        declarations: [
            StatusPipe,
            SeverityPipe
         ],
        bootstrap: [ ],
        exports: [ 
            CommonModule,
            StatusPipe,
            SeverityPipe
         ]
    }
)

export class SharedModule {

}