import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  text1 = 'Also you can add your content for less price';
  text3 = 'Your advertisement for ';
  numbers: number[] = [1, 1.5, 2];
  isGreen = true;

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) {

  }
  buttonClick(): void{
    this._router.navigate(['./info.html']);
  }
}
