import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular and  CSS.'
    },
    {
      name: 'Task Manager App',
      description: 'An app to manage daily tasks with CRUD operations and user authentication.'
    },
    {
      name: 'Weather Dashboard',
      description: 'A dashboard displaying weather information fetched from a public API.'
    }
  ];
}
