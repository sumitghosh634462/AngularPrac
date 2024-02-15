import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-using-form-group',
  templateUrl: './using-form-group.component.html',
  styleUrls: ['./using-form-group.component.css']
})
export class UsingFormGroupComponent {

  userForm:FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('')
  });

  onSaveUser(){
    // debugger;
    const ob = this.userForm.value;
  }
}
