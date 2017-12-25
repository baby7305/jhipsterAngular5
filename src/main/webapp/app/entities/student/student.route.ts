import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { StudentComponent } from './student.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentPopupComponent } from './student-dialog.component';
import { StudentDeletePopupComponent } from './student-delete-dialog.component';

export const studentRoute: Routes = [
    {
        path: 'student',
        component: StudentComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'test2App.student.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'student/:id',
        component: StudentDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'test2App.student.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const studentPopupRoute: Routes = [
    {
        path: 'student-new',
        component: StudentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'test2App.student.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'student/:id/edit',
        component: StudentPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'test2App.student.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'student/:id/delete',
        component: StudentDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'test2App.student.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
