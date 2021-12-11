import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Teszt server';

  username = '';
  resetDisabled = true;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }



  onResetUsername(){
    this.username = '';
    this.checkUsername();
  }

  onUpdateUsername(){
    this.checkUsername();
  }

  checkUsername(){
    if(this.username != ''){
      this.resetDisabled = false;
    }
    else{
      this.resetDisabled = true;
    } 
  }
}
