import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

   form=new FormGroup({
    userName:new FormControl(),
    pasword:new FormControl()
});
  constructor() { }

  ngOnInit(): void {
  }

}
