import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
      Servers:
      <br>
      <label>ServerName:</label>
      <!--<input   -->
      <!--    type="text"   -->
      <!--    class="form-control"   -->
      <!--    (input)="onUpdateServername($event)">   -->
      <input
          type="text"
          class="form-control"
          [(ngModel)]="serverName">
      <br>next servername: {{serverName}}<br>
      <button 
          class="btn btn-primary"
          [disabled]="!allowNewServer"
          (click)="onCreateServer()"
      >Add Server</button>
      <br>
      <p *ngIf="createdServers.length!==0; else noServerCreated">{{createdServers.length}} server(s) created: {{createdServers}}</p>
      <ng-template #noServerCreated>
        <p>no servers created yet</p>
      </ng-template>

      <app-server *ngFor="let server of createdServers"></app-server>
  `,
  styles: [``]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  static readonly defaultServername = 'DummyServer'
  serverName = ServersComponent.defaultServername
  createdServers = Array<String>()

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.createdServers.push(this.serverName)
    this.serverName = ServersComponent.defaultServername
  }

  onUpdateServername(event: Event) {
    let inputElem = <HTMLInputElement>event.target 
    this.serverName = inputElem.value
  }

}
