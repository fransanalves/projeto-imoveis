import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImoveisModel } from './imoveis-model';
import { Observable } from 'rxjs';

//metodo para chamar a api//
@Injectable({
  providedIn: 'root'
})
export class ImoveisApiService {

  constructor(private httpClient:HttpClient) { }

  public List():Observable<ImoveisModel[]>{
    return this.httpClient.get<ImoveisModel[]>('https://it3imoveis.firebaseio.com/vendas.json')
  }
}
