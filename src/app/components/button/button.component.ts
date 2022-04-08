import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // click,change,input,keyup,keydow bunlar angular'a ait event isimleri

  @Input() title: string = '';
  @Input() style: any;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  // yani buttona click olduğunda hangi tipte bir argüman fırlarığımızı tanımladık.
  // event tetikleyici
  // kullanıcı bu component ile bir eylem gerçekleştirdiğinde nasıl bir olay gerçekleşecği ile ilgilenir.

  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    this.clicked.emit(this.title);
  }

}
