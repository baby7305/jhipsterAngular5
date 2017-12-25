import { BaseEntity } from './../../shared';

export class Student implements BaseEntity {
    constructor(
        public id?: number,
        public sname?: string,
        public sex?: string,
        public age?: number,
        public teachers?: BaseEntity[],
        public teacher1S?: BaseEntity[],
    ) {
    }
}
