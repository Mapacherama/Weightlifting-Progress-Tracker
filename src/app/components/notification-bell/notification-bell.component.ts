import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-notification-bell',
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.scss']
})

export class NotificationBellComponent {
  showMessages: boolean = false;
  bell: IconProp = ['fas', 'bell'];
  times: IconProp = ['fas', 'times'];
  user: IconProp = ['fas', 'user'];
  moneyBill: IconProp = ['fas', 'money-bill'];
  trash: IconProp = ['fas', 'trash'];
  messages: any[] = [
    {
      id: 1,
      text: "New customer registered",
      icon: "user",
    },
    {
      id: 2,
      text: "Invoice has been paid",
      icon: "money-bill",
    },
    {
      id: 3,
      text: "Customer deleted",
      icon: "trash",
    },
  ];

  toggleMessagesPanel() {
    this.showMessages = !this.showMessages;
  }

  getIcon(icon: string): IconProp {
    switch(icon) {
        case 'user': return ['fas', 'user'];
        case 'money-bill': return ['fas', 'money-bill'];
        case 'trash': return ['fas', 'trash'];
        default: return ['fas', 'user']; // default icon
    }
}

  deleteMessage(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);
    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }

  get notificationCount() {
    return this.messages.length;
  }

  get hasNewMessages() {
    return this.notificationCount > 0;
  }

  get emptyMessages() {
    return this.messages.length === 0;
  }
}
