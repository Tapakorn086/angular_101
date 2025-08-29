import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Signup } from './signup/signup';
import { ProfileComponent } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "how are u";
  name = "tapakorn";
  arr = [1,2,3]

  hello(){
    let x =10
    const y =20
    var data = 30
    return x+y
  }

  handleClickEvent() {
    alert("function is called")
    this.otherFunction()
  }

  otherFunction(){
    console.log("otherFunction is called ")
  }
}
