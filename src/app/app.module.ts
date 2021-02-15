import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbRadioModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { NumberBoardComponent } from './number-board/number-board.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { HomeComponent } from './home/home.component';
import { HowtoComponent } from './howto/howto.component';
import { ShowNumberComponent } from './show-number/show-number.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberBoardComponent,
    ResultTableComponent,
    HomeComponent,
    HowtoComponent,
    ShowNumberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'play/:id', component: NumberBoardComponent},
      { path: 'howto', component: HowtoComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbButtonModule,
    NbRadioModule,
    NbEvaIconsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
