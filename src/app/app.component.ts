import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private email:string;
  private displayName:string;
  private password:string;

  constructor(private dataService:DataService){

  }

  onAdd(){
    this.dataService.addCourses(this.email, this.displayName, this.password).subscribe(res=>{
      console.log(res);
    });
  }
}
