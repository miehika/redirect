import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core'
import { redirect, redirectProperties } from '../../interfaces/redirect'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'
@Component({
    selector: 'app-redirection',
    standalone: true,
    imports: [],
    templateUrl: './redirection.component.html',
    styleUrl: './redirection.component.scss',
})
export class RedirectionComponent implements OnInit, AfterViewInit {
    @ViewChild('redirect_btn') redirect_btn!: ElementRef<HTMLElement>
    @Input() set directory(data: redirect) {
        this._directory = data
    }

    get directory() {
        return this._directory
    }

    _directory: redirect = {}
    redirectKey!: string
    redirectProperties!: redirectProperties
    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.route.queryParams.subscribe((data) => {
            this.redirectKey = data['project']
            this.redirectProperties = this.directory[this.redirectKey]
        })
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
