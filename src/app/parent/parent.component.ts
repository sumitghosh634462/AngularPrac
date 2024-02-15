import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
ngOnInit(){
  console.log("In parent onInit");
}
constructor(){
  console.log("in parent constructor");
}
ngOnDestroy(){
  console.log("In parent destroy");
}
}
