import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public cpf: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public hasText() {
    return this.cpf !== '';
  }

  public getText() {
    return this.cpf;
  }
}