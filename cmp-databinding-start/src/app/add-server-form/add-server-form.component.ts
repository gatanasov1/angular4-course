import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-server-form',
  templateUrl: './add-server-form.component.html',
  styleUrls: ['./add-server-form.component.css']
})
export class AddServerFormComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  onAddServer(serverName, serverContent) {
    this.serverCreated.emit({
      serverName: serverName,
      serverContent: serverContent
    });
  }

  onAddBlueprint(serverName, serverContent) {
    this.blueprintCreated.emit({
      serverName: serverName,
      serverContent: serverContent
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
