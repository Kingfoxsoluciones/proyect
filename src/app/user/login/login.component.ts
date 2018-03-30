import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email:string;
  private password:string;

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  onAdd(){
    this.dataService.addLogin(this.email, this.password).subscribe(res => {
      console.log(res);
    });
  }
}
