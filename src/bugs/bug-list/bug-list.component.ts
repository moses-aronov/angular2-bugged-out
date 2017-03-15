//Modules
import { Component, OnInit } from '@angular/core'

//Services
import { BugService } from '../service/bug.service'

//Models
import {Bug } from '../model/bug'

@Component({
    moduleId: module.id,
    selector: 'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls: [ 'bug-list.component.css' ]
})

export class BugListComponent implements OnInit {

    private bugs: Bug[] = [];

    constructor(private bugService: BugService){

    }

    ngOnInit(){
        this.getAddedBugs();
        this.getUpdatedBugs()
        this.getRemovedBugs()
    }

    getAddedBugs(){
        this.bugService.getAddedBugs()
        .subscribe(bug => {
            this.bugs.push(bug)
            
        },
        err => {
            console.error("Unable to get added bug - ", err)
        })
    }

    getUpdatedBugs(){
        this.bugService.changedListener()
        .subscribe(updatedBug => {
            //Find bug with id
            const bugIndex = this.bugs.map(index => index.id).indexOf(updatedBug['id']);
            this.bugs[bugIndex] = updatedBug
        },
        err => {
            console.error("Unable to get updated bug - " + err)
        });
    }

    getRemovedBugs(){
        this.bugService.deleteListener()
        .subscribe(removedBug => {
            const newArray = this.bugs.filter(function(el){
                return el.id != removedBug.id
            })
            this.bugs = newArray
        })
    }
}