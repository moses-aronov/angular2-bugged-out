//Modules
import {Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: ["bug-detail.component.css"]
})

export class BugDetailComponent implements OnInit{
    private modalId = "bugModal";
    private bugForm: FormGroup;

    ngOnInit(){
        this.configureForm()
    }

    configureForm(){
        this.bugForm = new FormGroup({
            // First Param = inital Value
            // Validators
            title: new FormControl(null, Validators.required),   
            status: new FormControl(1, Validators.required), //Set Default Value
            severity: new FormControl(1, Validators.required),
            description: new FormControl(null, Validators.required)
        })
    }

    submitForm(){
        console.log(this.bugForm)//TODO: REMOVE
    }
}