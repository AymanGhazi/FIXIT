import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() control :FormControl=new FormControl()
@Input() type =''
@Input() placeholder =''
@Input() format =''
@Input() prefix =''
@Input() disabled =false
@Input() marginleft=" margin-left: 45px;"


}
