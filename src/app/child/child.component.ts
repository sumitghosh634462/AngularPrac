import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // isAvailable:boolean = false;
  // str:string = "this is from child";

  ngOnInit(){
    console.log("In child onInit");
  }
  constructor(){
    console.log("in child constructor");
  }
  ngOnDestroy(){
    console.log("In child destroy");
  }
}
