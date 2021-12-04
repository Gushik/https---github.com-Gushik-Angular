import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  name = "Ferd";
  public printGreeting(){
    return 'Привет ' + this.name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
