import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChallengeService } from '../challenge.service';
import { ProjectActivity } from '../project_activity';
import { Project } from '../project'

import CommonsJs from '../../assets/js/commonsjs'

@Component({
  selector: 'app-project-activity-create',
  templateUrl: './project-activity-create.component.html',
  styleUrls: ['./project-activity-create.component.css']
})
export class ProjectActivityCreateComponent implements OnInit {

  projectActivity: ProjectActivity = new ProjectActivity();
  public projects?: Project[];
  commonsJs = new CommonsJs();
  @ViewChild('createForm') createForm: NgForm;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.projectActivity.project = new Project();
    this.geProjectList();
  }

  private geProjectList(){
    this.challengeService.getProjectList().subscribe(data => {
      this.projects = data.reverse()
    });
  }

  onSubmit(){
    if(this.commonsJs.CheckIfFormIsValid(this.createForm)){
      this.challengeService.createProjectActivity(this.projectActivity).subscribe(
        data => this.commonsJs.CallSimpleModelAlertSuccess("Atividade criada com sucesso."),
        error => this.commonsJs.ParseSimpleError(error)
      );
    }
  }

}
