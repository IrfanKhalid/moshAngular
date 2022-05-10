import { Component, OnInit } from '@angular/core';
import {UserValidators} from '../shared/Validators';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

   form=new FormGroup({
    userName:new FormControl('',[Validators.required,
      Validators.minLength(4),
      UserValidators.CanNotContainSpace],
      UserValidators.UniqueName),
    pasword:new FormControl('',Validators.required)
    });

    get userName(){
      return this.form.get('userName');
    }
  constructor() { }

  ngOnInit(): void {
  }

}
