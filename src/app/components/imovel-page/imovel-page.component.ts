import { ImoveisApiService } from './../../services/imoveis-api/imoveis-api.service';
import { ImoveisModel } from './../../services/imoveis-api/imoveis-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-page',
  templateUrl: './imovel-page.component.html',
  styleUrls: ['./imovel-page.component.css']
})
export class ImovelPageComponent implements OnInit {

  listaImoveis: ImoveisModel[];

  constructor(private imoveisApi:ImoveisApiService) { }

  ngOnInit(): void {

    this.imoveisApi.List().subscribe((lista) => {
      this.listaImoveis = lista;
    })
  }

}
