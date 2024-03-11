import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedTab = 'todo';

  onNavbar(tab: string){
    this.loadedTab = tab;
  }
  
}
