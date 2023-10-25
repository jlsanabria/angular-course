import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';


  constructor() {
    const numberMap = [2, 3, 5, 7, 11].map(number => number * 3);
    console.log(numberMap);

    const textForEach = [1, 2, 3].forEach(text => text * 2);
    console.log(textForEach);

  }

  public getName(name: string) : string {
    return `Hi ${name}!`;
  }

  getName2 = (name: string) => `Hi ${name}`;

}

const appComp: AppComponent = new AppComponent();

console.log(appComp.getName('JKO'));
console.log(appComp.getName2('Lulu'));
