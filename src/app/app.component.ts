import { Component } from '@angular/core';


//metadata
@Component({
  selector: 'app-root', // bu isim ile başka componentten html element gibi bu component çağırabiliriz
  templateUrl: './app.component.html', // bu componente html bind edildiği anlamına gelir.
  styleUrls: ['./app.component.css'] // her bir component kendine otonom bir stil dosyasına sahiptir.
})
export class AppComponent { // public keyword

  // property yada method tanımı yaparız
  // methodlarımızı html bağlarken eventbinding
  // property html bağlarsak bu durumda property binding

  // two way model binding: çift taraflı veri bağlama; tsdosyasındaki bir değişken html tarafında eğer güncellenirse ts dosyasında da bir güncelleme gerçekleşir.tam tersi durumda geçerli

  // number (long,int,decimal)
  // string hem char,hemde string
  // boolean true,false
  // [] array type
  // {} object referance type
  counter: number = 0; // int,long,byte

  toggle: boolean = false;

  title: string = 'LessonOne';

  names: Array<string> = [
    "ali",
    "ahmet",
    "ayşe",
    "can"
  ];

  // names2: string[] = [
  //   "ali",
  //   "ahmet",
  //   "ayşe",
  //   "can"
  // ];

  // değer döndürmeyen methodlara verdiğimiz bir tip tanımlaması void
  clickMe(): void {
    alert('clicked!!');
    console.log('counter', this.counter);
  }





}
