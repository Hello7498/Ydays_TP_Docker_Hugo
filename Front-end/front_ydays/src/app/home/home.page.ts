import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private userName: string;
  private password: string;
  private colorForm: string = "";
  private wrongPassword: string = ""
  private isActive: boolean = true;
  private eyes: string = "fa fa-eye-slash itemRight";

  constructor(public navCtrl: NavController, private http: HttpClient) {


  }
  login() {
    //A refacto plus tard
    if (this.userName == undefined || this.password == undefined) {
      this.userName = ""
      this.password = ""

    }
    if (this.userName == "" || this.password == "") {
      // console.log(this.userNameStyle)
      this.colorForm = "rgba(255,0,0,.4)"
      this.wrongPassword = "Username or password invalid"


    } else {
      console.log(this.userName)
      console.log(this.password)
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let data = {
        login: this.userName,
        password: this.password
      }
      this.http.post("http://localhost:3002/login", data).subscribe(
        res => {
          console.log(res)
          this.navCtrl.navigateForward('/index');
        },
        err => {
          this.colorForm = "rgba(255,0,0,.4)"
          this.wrongPassword = "Username or password invalid"
        })
    }
  }
  showPassword() {
    if (this.isActive) {
      this.isActive = false
      this.eyes = "fa fa-eye itemRight"
    } else {
      this.isActive = true
      this.eyes = "fa fa-eye-slash itemRight"
    }

  }
}
