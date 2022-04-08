import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // private keyword eğer template üzerinden erişmek istemiyorsak kullanırız.
  userForm: FormGroup = this.builder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  constructor(public builder: FormBuilder) { }

  ngOnInit(): void {
  }

  Send() {

    const username = this.userForm.get('username')?.value;
    this.userForm.get('username')?.setValue('ali');

    // duruma göre dinamik validayon ekleme işlemleri yapabilirsiniz
    this.userForm.setValidators(Validators.email);

    // duruma göre validasyon temizleme işlemi
    this.userForm.clearValidators();


    if (this.userForm.valid) {
      // api gönder
      const formValues = this.userForm.value;
      console.log('formValues', formValues);
    }
  }

}
