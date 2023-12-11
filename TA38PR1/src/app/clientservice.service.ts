import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService  {
  private clients: any[] = [];

  addClient(client: any) {
    console.log(client);
    this.clients.push(client);
  }

  getClients() {
    return this.clients;
  }
}
