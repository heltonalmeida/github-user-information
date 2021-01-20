import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() public type = 'text';
  @Input() public label!: string;
  @Input() public requiredLabel = false;
  @Input() public disabled = false;
  @Input() public value: any;
  @Input() public tabindex = 0;
  @Input() public inputClass = '';
  @Input() public placeholder = '';
  @Input() public maxlength: number;

  constructor() { }

  ngOnInit(): void {
    
  }

}
