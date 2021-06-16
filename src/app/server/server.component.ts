import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './app.server.html',
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline'
}