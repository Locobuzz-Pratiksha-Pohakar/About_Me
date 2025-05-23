import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { title: 'Portfolio Website', description: 'Built with Angular and hosted on Firebase' },
    { title: 'Task Manager', description: 'A full-stack app with MEAN stack' }
  ];
  
  showProjects = true;
  
}

