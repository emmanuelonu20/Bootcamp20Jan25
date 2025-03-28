import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //properties
  title = 'Hello World';
  name = 'John Wick';
  studentNames = ['Jheteas', 'Michael', 'Bilal', 'Staphanie', 'Renan', 'Malek'];
  imageUrl="https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2018/06/tower-3.jpg";
  numColSpan=2;
  blueClass = 'blue';
  bgColor = 'orange';
  hasError: boolean = true;
  currentTab = 35;

  //constructor


  //methods
  showTowerImage(){
    this.imageUrl = "https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2018/06/tower-3.jpg";
  }

  showPeaceBridge(){
    this.imageUrl = "https://i0.wp.com/takemytrip.com/wp-content/uploads/2015/11/1050_peacebridge.jpg?fit=1050%2C600&ssl=1";
  }

}
