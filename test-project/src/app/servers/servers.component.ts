import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServerAllowed = false;
  serverCount = 0;
  serverStatus = "";
  serverName = "";
  servers = ["test1", "test2"];

  constructor() {
    this.addServerAllowed = true;
  }

  ngOnInit() {
  }

  onAddServerClicked() {
    this.serverCount++;
    this.serverStatus = "Server was created, name was "+this.serverName ;
    this.servers.push(this.serverName);
  }

  onServerName(event) {
    this.serverName = event.target.value;
  };
}
