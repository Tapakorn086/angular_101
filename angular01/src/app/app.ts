import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
}
