import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-chat-room',
  //standalone: true, 
  //imports: [],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})

export class ChatRoomComponent implements OnInit {
messages: string[] = [];
new_message: string = '';

constructor(private chat_service: ChatService) {}

ngOnInit(): void {
  this.chat_service.subscribe_to_topic('chat/room1', (message) => {
    this.messages.push(message);
  });
}

send_message() {
  if (this.new_message.trim() !== '') {
    this.chat_service.send_message('chat/room1', this.new_message);
    this.new_message = '';
  }
}

}
