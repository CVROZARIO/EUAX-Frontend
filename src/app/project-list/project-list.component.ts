import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { Project } from '../project'

import CommonsJs from '../../assets/js/commonsjs'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects?: Project[];
  commonsJs = new CommonsJs();

  constructor(private challengeService: ChallengeService) {
  }

  ngOnInit(): void {
    this.geProjectList();
  }

  private geProjectList(){
    this.challengeService.getProjectList().subscribe(data => {
      this.projects = data.reverse()
    });
  }

  deleteProject(objId : any): void {
    this.challengeService.deleteProject(Number(objId)).subscribe(
      data => this.commonsJs.CallSimpleModelAlertSuccess("Projeto removido com sucesso."),
      error => this.commonsJs.ParseSimpleError(error)
    );
  }

}
