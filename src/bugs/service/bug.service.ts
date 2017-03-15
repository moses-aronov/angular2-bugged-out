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
                newBug.id = bug.key;
                //Callback
                obs.next(newBug)
            },
            err => {
                obs.throw(err)
            })
        });
    }

    changedListener():Observable<any>{
        return Observable.create(obs => {
            this.bugsDbRef.on("child_changed", bug => {
                const updatedBug = bug.val() as Bug;
                updatedBug.id = bug.key;
                obs.next(updatedBug)
            }, 
            err => {
                obs.throw(err)
            })
        })
    }

    deleteListener(): Observable<any>{
        return Observable.create(obs => {
            this.bugsDbRef.on("child_removed", bug => {
                const removedBug = bug.val() as Bug;
                removedBug.id = bug.key;
                obs.next(removedBug)
            },
            err => {
                obs.throw(err)
            })
        })
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

    updateBug(bug: Bug){
        const currentBugRef = this.bugsDbRef.child(bug.id)
        bug.id = null; //Remove bug id
        bug.updatedBy="Tom Tickle";
        bug.updatedDate = Date.now();

        currentBugRef.update(bug)
    }
    
    deleteBug(bug : Bug){
        const currentBugRef = this.bugsDbRef.child(bug.id)
        currentBugRef.remove().catch(error => {
            console.error("Unable to delete bug on Firebase - ", error)
        })
    }
}