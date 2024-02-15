import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-using-form-builder',
  templateUrl: './using-form-builder.component.html',
  styleUrls: ['./using-form-builder.component.css']
})
export class UsingFormBuilderComponent{

  userForm:any;

  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(10)]],
      username:['',[Validators.required]],
      email:['',[Validators.required]]
    });
  }

  onSaveUser(){

  }

  get fc(){
    return this.userForm.controls;
  }
}
