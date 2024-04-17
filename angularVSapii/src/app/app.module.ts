import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GetallComponent } from './components/getall/getall.component';
import { RouterModule } from '@angular/router';                                     // RouterModule |ishlashi uchun
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { NgBootstrapCreateComponent } from './components/ng-bootstrap-create/ng-bootstrap-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetallComponent,
    CreateComponent,
    NgBootstrapCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, /* routerLink to'g'ri ishlashi uchun(pagedan pagega
                      otayotganda refresh bolmasligi uchun)*/
    FormsModule,

    HttpClientModule, NgbModule /*Servise ichidagi HttpClient togri ishlashi uchun import qilindi */
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
