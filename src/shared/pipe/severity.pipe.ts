import { Pipe, PipeTransform } from '@angular/core'

import {SEVERITY} from '../constants/constants'

@Pipe({
    name: "severity"
})

export class SeverityPipe implements PipeTransform{
    private severity = SEVERITY;

    transform(severityNum: number){
        return this.severity[severityNum]
    }
}