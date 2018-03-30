import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  addCourses(course:string, course1:string, course2:string){
    const data = { email:course, displayName:course1, password:course2}
    return this.http.post('/api/signup', data).map(res=>res.json().message)
  }
}
