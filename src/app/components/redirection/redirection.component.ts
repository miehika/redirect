import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core'
import { redirectProperties } from '../../interfaces/redirect'
import { ActivatedRoute } from '@angular/router'
import { SharedService } from '../../services/shared.service'
import { combineLatest, filter, tap } from 'rxjs'
@Component({
    selector: 'app-redirection',
    standalone: true,
    imports: [],
    templateUrl: './redirection.component.html',
    styleUrl: './redirection.component.scss',
})
export class RedirectionComponent implements OnInit, AfterViewInit {
    @ViewChild('redirect_btn') redirect_btn!: ElementRef<HTMLElement>

    redirectKey!: string
    redirectProperties!: redirectProperties
    constructor(
        private route: ActivatedRoute,
        private sharedService: SharedService
    ) {}
    ngOnInit(): void {
        combineLatest([
            this.route.params,
            this.sharedService.directory$.pipe(filter((a) => a)),
        ])
            .pipe(
                tap(([routeParams, directory]) => {
                    this.redirectKey = routeParams['project']
                    this.redirectProperties = directory[this.redirectKey]
                })
            )
            .subscribe()
    }
    ngAfterViewInit(): void {
        if (this.redirectProperties?.redirect_to) {
            setTimeout(() => {
                let el: HTMLElement = this.redirect_btn.nativeElement
                el.click()
            }, 5000)
        }
    }
}
