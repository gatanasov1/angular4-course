import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = Math.random() > 0.5 ? 'offline': "online";


  getColor() {
    return this.serverStatus === "offline"? "yellow": "lightgreen";
  }
}
