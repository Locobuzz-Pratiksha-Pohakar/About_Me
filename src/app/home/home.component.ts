 import { Component } from '@angular/core';
import { SimpleButtonComponent } from '../simple-button/simple-button.component';

@Component({
  selector: 'app-home',
  imports: [SimpleButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {

}


// import { SimpleButtonComponent } from '../simple-button/simple-button.component';

// @Component({
//   // ...
//   imports: [SimpleButtonComponent],
//   // ...
// })
// export class HomeComponent {}
