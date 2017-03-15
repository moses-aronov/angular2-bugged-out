//Modules
import {Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators} from '@angular/forms'

//Models
import {Bug } from '../model/bug' 
//Services
import {BugService} from '../service/bug.service'

//Enums
import { STATUS, SEVERITY } from '../../shared/constants/constants'

@Component({
    moduleId: module.id,
    selector: 'bug-detail',
    templateUrl: 'bug-detail.component.html',
    styleUrls: ["bug-detail.component.css"]
})

export class BugDetailComponent implements OnInit{
    private modalId = "bugModal";
    private bugForm: FormGroup;
    private statuses = STATUS
    private severities = SEVERITY

    private statusArr : String[] = []
    private severityArr : String[] = []


    //To Pupulate with existing bug
    private currentBug = new Bug(null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);

    constructor(private bugService: BugService){

    }

    ngOnInit(){
        //Extract array of number that relate to Enums
        this.statusArr = Object.keys(this.statuses).filter(Number);
        this.severityArr = Object.keys(this.severities).filter(Number);
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
        this.currentBug.title = this.bugForm.value["title"]
        this.currentBug.status = this.bugForm.value["status"]
        this.currentBug.severity = this.bugForm.value["severity"]
        this.currentBug.description = this.bugForm.value["description"]

        if(this.currentBug.id){
            this.updateBug()
        } else {
            this.addBug()
        }
    }

    addBug(){
        this.bugService.addBug(this.currentBug)
        
    }

    updateBug(){
        this.bugService.updateBug(this.currentBug);
    }

    deleteBug(event: Event, bug : Bug){
        event.stopPropagation()
        this.bugService.deleteBug(bug)

    }
    refreshForm(){
        this.bugForm.reset({
            status: this.statuses.Logged,
            severity: this.severities.Severe
        })
    }
}