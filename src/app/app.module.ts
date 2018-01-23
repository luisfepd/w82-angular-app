import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TheQuoteComponent } from './the-quote/the-quote.component';
import { TheQuoteService } from './the-quote/the-quote.service';
import { QuoteTileComponent } from './the-quote/quote-tile/quote-tile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { 
    path: 'dashboard',
    component: DashboardComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TheQuoteComponent,
    QuoteTileComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule
  ],
  providers: [TheQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
