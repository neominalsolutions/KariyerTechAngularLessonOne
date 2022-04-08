import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';


// declaration componenti module tanımadan sorumlu işlem
// eğer componentiniz bu module dışanda da kullanılacak ise o zaman export da yazarız
@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { } // Module encapsulate oldu.
