import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
        .white{
            color: white;
        }
    `]
})
export class AppComponent {
  display = true;
  logs: number[] = [];
  count = 0;

  constructor(){}

  onToggle(){
    this.display = !this.display;
    this.count++;
    this.logs.push(this.count)
  }

  getColor(log: number){
    return log >= 5 ? 'blue' : 'white';
  }
}
