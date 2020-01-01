import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {};
  constructor(private auth :AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(n => {
      console.log('success');
    }, err=> {
      console.log('failed');
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(){
    localStorage.removeItem('token');
  }
}
