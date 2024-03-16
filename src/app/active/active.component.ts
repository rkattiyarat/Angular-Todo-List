import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent {

  @Output() feature = new EventEmitter<string>();

  onSelect(feature: string){
    this.feature.emit(feature);
  }

}
