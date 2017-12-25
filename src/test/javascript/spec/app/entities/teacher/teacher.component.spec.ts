/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';

import { Test2TestModule } from '../../../test.module';
import { TeacherComponent } from '../../../../../../main/webapp/app/entities/teacher/teacher.component';
import { TeacherService } from '../../../../../../main/webapp/app/entities/teacher/teacher.service';
import { Teacher } from '../../../../../../main/webapp/app/entities/teacher/teacher.model';

describe('Component Tests', () => {

    describe('Teacher Management Component', () => {
        let comp: TeacherComponent;
        let fixture: ComponentFixture<TeacherComponent>;
        let service: TeacherService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Test2TestModule],
                declarations: [TeacherComponent],
                providers: [
                    TeacherService
                ]
            })
            .overrideTemplate(TeacherComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TeacherComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TeacherService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new Teacher(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.teachers[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
