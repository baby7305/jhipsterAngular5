import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Test2StudentModule } from './student/student.module';
import { Test2TeacherModule } from './teacher/teacher.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Test2StudentModule,
        Test2TeacherModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Test2EntityModule {}
