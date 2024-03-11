import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  @Output() tabSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {}

  onSelected(tab: string){
    this.tabSelected.emit(tab);
  }

}
