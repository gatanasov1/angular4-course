import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-server-form',
  templateUrl: './add-server-form.component.html',
  styleUrls: ['./add-server-form.component.css']
})
export class AddServerFormComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverContentInput') serverContentInput;

  onAddServer(serverName) {
    this.serverCreated.emit({
      serverName: serverName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverName) {
    this.blueprintCreated.emit({
      serverName: serverName,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
