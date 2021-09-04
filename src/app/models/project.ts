import { Organization } from "./organization";
import { ProjectParticipation } from "./project-participation";
export class Project {

    constructor(
        public id: number,
        public name: string,
        public startDate: Date,
        public endingDate: Date,
        public place: string,
        public organizationId: number,
        public organizationUserName: string,
        public projectType: string,
        public projectParticipations: ProjectParticipation[]
    ){}


    public set(project: Project){

        this.id=project.id;
        this.name=project.name;
        this.startDate=project.startDate;
        this.endingDate=project.endingDate;
        this.organizationId=project.organizationId;
        this.projectParticipations=project.projectParticipations;
        this.place = project.place;
    }
}
