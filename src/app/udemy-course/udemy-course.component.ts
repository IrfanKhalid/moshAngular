import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.css']
})
export class UdemyCourseComponent implements OnInit {

  constructor() { }

  CourseCateories=[
    {id:1,data:"Development"},
    {id:2,data:"Art"},
    {id:3, data:"Languages"}
  ];
  ngOnInit(): void {
  }
  check(cName:any){
    console.log(cName);
  }
  checkdata(cName:any){
    console.log(cName);
  }
}
