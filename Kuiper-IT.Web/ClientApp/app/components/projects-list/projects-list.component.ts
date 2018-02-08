import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../shared/classes/project';
import { Location } from '@angular/common';
import { DataService } from '../shared/services/data-service.service';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  constructor(
    private dataService: DataService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.getProjects();    
  }

  getProjects(): void {   
    this.dataService.getProjects().then(projects => this.projects = projects);    
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
  
  goBack(): void {
    this.location.back();
  }

}
