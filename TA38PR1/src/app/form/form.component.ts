import { Component } from '@angular/core';
import { ClientService } from '../clientservice.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      cif: ['', Validators.required],
      address: ['', Validators.required],
      group: ['', Validators.required],
    });
  }

  onSubmit() {
    const clientData = this.myForm.value;  
    this.clientService.addClient(clientData);
    this.myForm.reset();
  }
}