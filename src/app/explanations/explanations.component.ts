import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explanations',
  templateUrl: './explanations.component.html',
  styleUrls: ['./explanations.component.css']
})
export class ExplanationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   Explanations= [
  {'id': 1, 'name': 'ng Commands', 'description' : 'Something', 'image' : '../../assets/Background.jpg'},
  {'id': 2, 'name': 'Routing', 'description' : 'Anything', 'image' : '../../assets/Background.jpg'},
  {'id': 3, 'name': 'Components', 'description' : 'Nothing', 'image' : '../../assets/Background.jpg'},
  {'id': 4, 'name': 'Templates', 'description' : 'Anything', 'image' : '../../assets/Background.jpg'},
  {'id': 5, 'name': 'Directives', 'description' : 'Something', 'image' : '../../assets/Background.jpg'},
  {'id': 6, 'name': 'Dependancy Injections', 'description' : 'Nothing ', 'image' : '../../assets/Background.jpg'},
  {'id': 7, 'name': 'Services', 'description' : 'Anything', 'image' : '../../assets/Background.jpg'},
  {'id': 8, 'name': 'CRUD', 'description' : 'Nothing', 'image' : '../../assets/Background.jpg'},

 ]
}
 