export class Bug{
    constructor(
        public id: string,
        public title: string,
        public status: number,
        public severity: number,
        public description: string,
        public createdBy: string,
        public createdDate: string,
        public updatedBy?: string,
        public updatedDate?: string

    ){

    }
}