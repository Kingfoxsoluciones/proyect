import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private email:string;
  private displayName:string;
  private password:string;

  constructor(private dataService:DataService){

  }

  ngOnInit() {
  }

  onAdd(){
    this.dataService.addCourses(this.email, this.password, this.displayName).subscribe(res=>{
      console.log(res);
    });
  }
}
