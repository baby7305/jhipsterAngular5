import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Teacher } from './teacher.model';
import { TeacherService } from './teacher.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-teacher',
    templateUrl: './teacher.component.html'
})
export class TeacherComponent implements OnInit, OnDestroy {
teachers: Teacher[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private teacherService: TeacherService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.teacherService.query().subscribe(
            (res: ResponseWrapper) => {
                this.teachers = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTeachers();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Teacher) {
        return item.id;
    }
    registerChangeInTeachers() {
        this.eventSubscriber = this.eventManager.subscribe('teacherListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
