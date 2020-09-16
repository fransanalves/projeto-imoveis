import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-comp',
  templateUrl: './primeiro-comp.component.html',
  styleUrls: ['./primeiro-comp.component.css']
})
export class PrimeiroCompComponent implements OnInit {

  title:string = 'Meu primeiro componente em Angular';
  data:string;
  imgUrl:string = 'https://arquivo.devmedia.com.br/noticias/documentacao/documentacao_angular-cli-como-rodar-testes-e-checar-o-codigo_38248.png';
  mostraImagem = true;

  constructor() { }

  ngOnInit(): void {

  }
  executar(): void {

    this.data = this.title

  }

}
