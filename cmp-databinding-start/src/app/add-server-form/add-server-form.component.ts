import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-server-form',
  templateUrl: './add-server-form.component.html',
  styleUrls: ['./add-server-form.component.css']
})
export class AddServerFormComponent implements OnInit {
  @Input() serverElements;

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
  constructor() { }

  ngOnInit() {
  }

}
