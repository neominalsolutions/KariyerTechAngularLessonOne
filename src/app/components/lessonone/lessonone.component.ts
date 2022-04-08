import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessonone',
  templateUrl: './lessonone.component.html',
  styleUrls: ['./lessonone.component.css']
})
export class LessononeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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


  selectedCity: string = '';

  SelectCity(event: any) {
    this.selectedCity = event.target.value;
  }

  isActive: boolean = false;


  showMessage(value: string) {
    alert(value);
  }

}
