import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroCompComponent } from './components/primeiro-comp/primeiro-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavegacaoComponent } from './components/menu-navegacao/menu-navegacao.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ImovelCardComponent } from './components/imovel-card/imovel-card.component';
import { MatCardModule } from '@angular/material/card';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import locatePT from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { ImovelPageComponent } from './components/imovel-page/imovel-page.component';

registerLocaleData(locatePT, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroCompComponent,
    MenuNavegacaoComponent,
    ImovelCardComponent,
    ImovelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule

  ],
  providers: [{
    provide:LOCALE_ID, useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
