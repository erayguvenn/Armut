import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {UserModel} from "../../../../model/user.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message: string="";
  messages: string[] = [];
  bidId: number = 0;
  gonderenId: number = 0;
  alanId: number = 0;
  private connection: signalR.HubConnection;

  constructor(private userModel: UserModel) {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chat')
      .build();

    this.connection.start().catch(err => console.error(err.toString()));

    this.connection.on('addMessage', (name: string, message: string) => {
      this.messages.push(`${name}: ${message}`);
    });
  }

  ngOnInit(): void {
    this.gonderenId = this.userModel.getUserId();
    this.alanId = this.userModel.getWorkerId();
    this.bidId = this.userModel.getBidId();

  }

  sendMessage(): void {
    this.connection.invoke('send',this.bidId,this.alanId,this.gonderenId,this.message).catch(err => console.error(err.toString()));
    this.message = '';
  }
}
