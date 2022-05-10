import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leaf',
  templateUrl: './leaf.component.html',
  styleUrls: ['./leaf.component.css']
})
export class LeafComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  contactMethods=[
    {id:1,name:'SMS'},
    {id:2,name:'Phone'},
    {id:3,name:'Email'},

];
  log(item:any){
    console.log(item);
  }
  onSubmit(f:any){
    console.log(f);
  }
}
