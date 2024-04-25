import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { RedirectionComponent } from './components/redirection/redirection.component'
import { redirect } from './interfaces/redirect'
import { Observable, tap } from 'rxjs'
import { CommonModule } from '@angular/common'
import { SharedService } from './services/shared.service'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        RedirectionComponent,
        HttpClientModule,
        CommonModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'Redirecting...'
    directory: redirect = {}
    json$!: Observable<any>
    constructor(
        private httpclient: HttpClient,
        private sharedService: SharedService
    ) {}
    ngOnInit(): void {
        this.json$ = this.httpclient.get('../assets/redirect.json').pipe(
            tap((data) => {
                this.directory = data as redirect
                this.sharedService.directory$.next(this.directory)
            })
        )
    }
}
