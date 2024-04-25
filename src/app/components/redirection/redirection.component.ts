import { Component, Input, OnInit } from '@angular/core'
import { redirect, redirectProperties } from '../../interfaces/redirect'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-redirection',
    standalone: true,
    imports: [],
    templateUrl: './redirection.component.html',
    styleUrl: './redirection.component.scss',
})
export class RedirectionComponent implements OnInit {
    @Input() set directory(data: redirect) {
        this._directory = data
    }

    get directory() {
        return this._directory
    }

    _directory: redirect = {}
    redirectKey!: string
    redirectProperties!: redirectProperties
    constructor(private route: ActivatedRoute) {}
    ngOnInit(): void {
        this.route.queryParams.subscribe((data) => {
            this.redirectKey = data['project']
            this.redirectProperties = this.directory[this.redirectKey]
            console.log(this.redirectProperties)
        })
    }
}
