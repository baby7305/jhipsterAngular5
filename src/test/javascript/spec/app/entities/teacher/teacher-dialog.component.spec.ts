/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Test2TestModule } from '../../../test.module';
import { TeacherDialogComponent } from '../../../../../../main/webapp/app/entities/teacher/teacher-dialog.component';
import { TeacherService } from '../../../../../../main/webapp/app/entities/teacher/teacher.service';
import { Teacher } from '../../../../../../main/webapp/app/entities/teacher/teacher.model';
import { StudentService } from '../../../../../../main/webapp/app/entities/student';

describe('Component Tests', () => {

    describe('Teacher Management Dialog Component', () => {
        let comp: TeacherDialogComponent;
        let fixture: ComponentFixture<TeacherDialogComponent>;
        let service: TeacherService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Test2TestModule],
                declarations: [TeacherDialogComponent],
                providers: [
                    StudentService,
                    TeacherService
                ]
            })
            .overrideTemplate(TeacherDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TeacherDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TeacherService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Teacher(123);
                        spyOn(service, 'update').and.returnValue(Observable.of(entity));
                        comp.teacher = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.update).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'teacherListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );

            it('Should call create service on save for new entity',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        const entity = new Teacher();
                        spyOn(service, 'create').and.returnValue(Observable.of(entity));
                        comp.teacher = entity;
                        // WHEN
                        comp.save();
                        tick(); // simulate async

                        // THEN
                        expect(service.create).toHaveBeenCalledWith(entity);
                        expect(comp.isSaving).toEqual(false);
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'teacherListModification', content: 'OK'});
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
