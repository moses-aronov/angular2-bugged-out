//Modules
import {Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormControl, Validators} from '@angular/forms'

//Models
import {Bug } from '../model/bug' 
//Services
import {BugService} from '../service/bug.service'
@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: ["bug-detail.component.css"]
})

export class BugDetailComponent implements OnInit{
    private modalId = "bugModal";
    private bugForm: FormGroup;
    //To Pupulate with existing bug
    @Input() currentBug = new Bug(null, null, 1, 1, null, null, null, null, null);

    constructor(private bugService: BugService){

    }

    ngOnInit(){
        this.configureForm()
    }

    configureForm(bug?: Bug){
        if(bug){
            //Create a new instance to avoid collionm between form and list instance
            this.currentBug = new Bug(
                bug.id,
                bug.title,
                bug.status,
                bug.severity,
                bug.description,
                bug.createdBy,
                bug.createdDate,
                bug.updatedBy,
                bug.updatedDate
            )
        }

        this.bugForm = new FormGroup({
            // First Param = inital Value
            // Validators
            title: new FormControl(this.currentBug.title, Validators.required),   
            status: new FormControl(this.currentBug.status, Validators.required), //Set Default Value
            severity: new FormControl(this.currentBug.severity, Validators.required),
            description: new FormControl(this.currentBug.description, Validators.required)
        })
    }

    submitForm(){
        this.addBug()
    }

    addBug(){
        this.currentBug.title = this.bugForm.value["title"]
        this.currentBug.status = this.bugForm.value["status"]
        this.currentBug.severity = this.bugForm.value["severity"]
        this.currentBug.description = this.bugForm.value["description"]
        
        this.bugService.addBug(this.currentBug)

        this.refreshForm()
    }

    refreshForm(){
        this.bugForm.reset({
            status: 1,
            severity: 1
        })
    }
}