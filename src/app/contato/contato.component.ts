import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ["", [
      Validators.required,
      Validators.minLength(1)
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["",[
      Validators.minLength(11),
      Validators.required
    ]],
    email:["",[
      Validators.email,
      Validators.required
    ]],
    mensagem:["",[
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario(){
    alert("A mensagem foi enviada");
    this.formContato.reset();
  }

}
