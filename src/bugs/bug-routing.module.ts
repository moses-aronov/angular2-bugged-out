//Module
import  { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
//Component
import { BugListComponent } from './bug-list/bug-list.component'

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'bugs', component: BugListComponent}
        ])
    ],
    exports: [

    ]
})

export class BugRoutingModule{

}