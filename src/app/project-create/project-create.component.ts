import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChallengeService } from '../challenge.service';
import { Project } from '../project'

import CommonsJs from '../../assets/js/commonsjs'

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  project: Project = new Project();
  commonsJs = new CommonsJs();
  @ViewChild('createForm') createForm: NgForm;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.commonsJs.CheckIfFormIsValid(this.createForm)){
      this.challengeService.createProject(this.project).subscribe(
        data => this.commonsJs.CallSimpleModelAlertSuccess("Projeto criado com sucesso."),
        error => this.commonsJs.ParseSimpleError(error)
      );
    }
  }

}
