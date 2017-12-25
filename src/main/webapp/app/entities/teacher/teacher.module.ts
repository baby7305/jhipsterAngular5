import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Test2SharedModule } from '../../shared';
import {
    TeacherService,
    TeacherPopupService,
    TeacherComponent,
    TeacherDetailComponent,
    TeacherDialogComponent,
    TeacherPopupComponent,
    TeacherDeletePopupComponent,
    TeacherDeleteDialogComponent,
    teacherRoute,
    teacherPopupRoute,
} from './';

const ENTITY_STATES = [
    ...teacherRoute,
    ...teacherPopupRoute,
];

@NgModule({
    imports: [
        Test2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TeacherComponent,
        TeacherDetailComponent,
        TeacherDialogComponent,
        TeacherDeleteDialogComponent,
        TeacherPopupComponent,
        TeacherDeletePopupComponent,
    ],
    entryComponents: [
        TeacherComponent,
        TeacherDialogComponent,
        TeacherPopupComponent,
        TeacherDeleteDialogComponent,
        TeacherDeletePopupComponent,
    ],
    providers: [
        TeacherService,
        TeacherPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Test2TeacherModule {}
