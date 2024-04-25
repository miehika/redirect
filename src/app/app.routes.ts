import { Routes } from '@angular/router'
import { RedirectionComponent } from './components/redirection/redirection.component'

export const routes: Routes = [
    {
        path: ':project',
        component: RedirectionComponent,
    },
]
