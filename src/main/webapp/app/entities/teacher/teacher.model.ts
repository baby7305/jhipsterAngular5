import { BaseEntity } from './../../shared';

export class Teacher implements BaseEntity {
    constructor(
        public id?: number,
        public tname?: string,
        public sex?: string,
        public age?: number,
        public student1S?: BaseEntity[],
        public students?: BaseEntity[],
    ) {
    }
}
