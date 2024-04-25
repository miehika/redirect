import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { redirect } from '../interfaces/redirect'

@Injectable({
    providedIn: 'root',
})
export class SharedService {
    directory$: BehaviorSubject<redirect | any> = new BehaviorSubject(null)
    constructor() {}
}
