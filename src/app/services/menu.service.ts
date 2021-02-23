import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {


  groups = {};

  constructor(private http: HttpClient) {
  }

  getMenu() {
    return this.http.get('http://localhost:8080/group');
  }

}
