/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Test2TestModule } from '../../../test.module';
import { TeacherDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/teacher/teacher-delete-dialog.component';
import { TeacherService } from '../../../../../../main/webapp/app/entities/teacher/teacher.service';

describe('Component Tests', () => {

    describe('Teacher Management Delete Component', () => {
        let comp: TeacherDeleteDialogComponent;
        let fixture: ComponentFixture<TeacherDeleteDialogComponent>;
        let service: TeacherService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Test2TestModule],
                declarations: [TeacherDeleteDialogComponent],
                providers: [
                    TeacherService
                ]
            })
            .overrideTemplate(TeacherDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TeacherDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TeacherService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
