import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// metadata
@NgModule({
  declarations: [
    AppComponent // uygulama içerisinde bu modülden çalışacak olan componentler
  ],
  imports: [
    // imports kısmında uygulama içerisinde kullanacağımız modulleri tanıttığımız yer.
    // uygulama içerisinde veya uygulama npm üzerinden yüklenen paketleri imports kısmında modul olrak tanıtırız.
    // BrowserPlatform ile ayağa kalsın.
    BrowserModule,
    FormsModule
  ],
  providers: [], // service httpclientservice, httpinterceptorservice, uygulama hizmet sağlayan yapıları burada tanıtırız.
  bootstrap: [AppComponent] // AppModule atından AppComponent ile ayağa kalkar.
})
export class AppModule { } // metadatalar sayesinde normal bir ecmascript class angularda bir özellik kazanır.
