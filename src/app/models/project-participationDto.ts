import { Project } from "./project";
import { ProjectParticipation } from "./project-participation";

export class ProjectParticipationDto {
    constructor(
        public projectParticipation: ProjectParticipation | null,
        public project: Project | null,
        public idSolidarityHistory: number
    ){}
}
