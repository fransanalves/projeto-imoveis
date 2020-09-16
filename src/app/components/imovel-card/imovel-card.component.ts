import { ImoveisModel } from './../../services/imoveis-api/imoveis-model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})
export class ImovelCardComponent implements OnChanges {

  @Input() imoveis: ImoveisModel;

  imgUrl:string;
  address:string;
  owner:string;
  price:number;
  type:string;

  constructor() { }

  ngOnChanges(): void {

    if(this.imoveis != null) {
      this.imgUrl = this.imoveis.image;
      this.address = this.imoveis.address;
      this.owner = this.imoveis.owner;
      this.price = this.imoveis.price;
      this.type = this.imoveis.type;
    }
  }

}
