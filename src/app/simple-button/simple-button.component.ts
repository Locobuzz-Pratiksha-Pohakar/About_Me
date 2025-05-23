import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-simple-button',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent {
  showInfo = false;

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
  userName: string = '';
}
