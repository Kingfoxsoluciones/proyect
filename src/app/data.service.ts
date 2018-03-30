import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  addCourses(course:string, course1:string, course2:string){
    const data = { email:course, password:course1, displayName:course2}
    return this.http.post('/api/signup', data).map(res=>res.json().message)
  }

  addLogin(course:string, course1:string){
    const data = { email:course, password:course1}
    return this.http.post('/api/login', data).map(res=>res.json().message)
  }
}
