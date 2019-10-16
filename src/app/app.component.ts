import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Contato {
  id: number;
  nome: string;
  fone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contato = new Contato();
  contatos = [];

  constructor(private service: ContatoService) {}

  ngOnInit(): void {
    this.buscaContatos();
  }

  buscaContatos() {
    this.service.buscaTodos().then(dados => {
      this.contatos = dados;
    });
  }

  salvar(formContato: NgForm) {
    this.contato.nome = formContato.value.nome;
    this.contato.fone = formContato.value.fone;

    this.service.salvaContato(this.contato)
      .then(c => {
        this.buscaContatos();
      });

    this.contato = new Contato();
  }

  editar(id: number) {
    for (const c of this.contatos) {
      console.log(c);
    }
  }

}
