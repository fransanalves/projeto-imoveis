
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImovelCardComponent } from './components/imovel-card/imovel-card.component';
import { PrimeiroCompComponent } from './components/primeiro-comp/primeiro-comp.component';
import { MenuNavegacaoComponent } from './components/menu-navegacao/menu-navegacao.component';
import { ImovelPageComponent } from './components/imovel-page/imovel-page.component';

const routes: Routes = [
  {
    path:'',
    component: MenuNavegacaoComponent,
    children: [
      {
        path:'',
        component: ImovelPageComponent,
      },

      {
        path:'exemplo',
        component: PrimeiroCompComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
