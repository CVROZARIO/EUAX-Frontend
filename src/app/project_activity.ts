import { Project } from './project'

export class ProjectActivity {
    id?: number;
    createdTime?: Date;
    project!: Project;
    name!: string;
    dateBegin!: Date;
    dateEnd!: Date;
    finished!: boolean;
}
