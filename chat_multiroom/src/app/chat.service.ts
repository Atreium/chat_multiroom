import { Injectable } from '@angular/core';
import * as mqtt from 'mqtt';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private client: mqtt.Client;

  constructor() { 
    this.client = mqtt.connect('mqtt://localhost:1883');
  }

  send_message(topic: string, message: string) {
    this.client.publish(topic, message);
  }

  subscribe_to_topic(topic: string, callback:(message: string) => void) {
    this.client.subscribe(topic);
    this.client.on('message', (received_topic, received_message) => {
      if (received_topic === topic) {
        callback(received_message.toString());
      }
    });
  }

}
