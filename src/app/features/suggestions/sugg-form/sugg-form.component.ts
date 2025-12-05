import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sugg-form',
  templateUrl: './sugg-form.component.html',
  styleUrl: './sugg-form.component.css'
})
export class SuggFormComponent {

  suggForm= new FormGroup({

    id:new FormControl(''),
    title:new FormControl('', [Validators.required, Validators.minLength(3)]),
    description:new FormControl('', [Validators.required, Validators.minLength(10)]),
    category:new FormControl('', Validators.required),
    date:new FormControl('', Validators.required),
    status:new FormControl('pending'),
    nbrLike:new FormControl(0)  
  })

  get title(){
    return this.suggForm.get('title');
  }
getFormValues(){
  console.log(this.suggForm);}
}
