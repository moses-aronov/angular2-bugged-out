//Modules
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

//Services
import { FirebaseConfigService } from '../../core/service/firebase-config.service'

//Models
import { Bug } from '../model/bug'

@Injectable()

export class BugService{

    private bugsDbRef = this.fire.database.ref('/bugs')

    constructor(private fire: FirebaseConfigService){

    }

    getAddedBugs(): Observable<any>{
        return Observable.create(obs => {
            //Setup listener
            this.bugsDbRef.on('child_added', bug => {
                //Cast the value to bug object
                const newBug = bug.val() as Bug;

                //Callback
                obs.next(newBug)
            },
            err => {
                obs.throw(err)
            })
        });
    }

    addBug(bug: Bug){
        const newBugRef = this.bugsDbRef.push()
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Moses',
            createdDate: Date.now()
        })
        .catch(err  => console.error("Unable to add bug to Firebase - ", err))

    }
}