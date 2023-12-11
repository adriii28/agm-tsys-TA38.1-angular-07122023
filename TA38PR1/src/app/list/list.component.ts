import { Component } from '@angular/core';
import { ClientService } from '../clientservice.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  clients: any[] = [];

  constructor(private clientService: ClientService) {
    this.clients = this.clientService.getClients();
  }
}
