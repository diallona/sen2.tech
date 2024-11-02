import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [   FormsModule, CommonModule, RouterLink ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  message: string = '';
  messages: { text: string; sentByUser: boolean }[] = [];

  sendMessage() {
    if (this.message.trim()) {
      this.messages.push({ text: this.message, sentByUser: true });
      this.message = '';
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    const chatBody = document.getElementById('chat-body');
    if (chatBody) {
      setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 100);
    }
  }
}
