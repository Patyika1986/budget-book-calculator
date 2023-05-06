import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form = this.formbuilder.group({
    description: ['',Validators.required],
    amount: ['',Validators.required],
    date: ['',Validators.required],
  })

  ngOnInit(): void {
  }

  add(value:any){

  }

  taking(){

  }

  output(){

  }

}
