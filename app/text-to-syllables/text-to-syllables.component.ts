import { Component, OnInit } from '@angular/core';
import {ConvertTextService} from "../services/convert-text.service";
import {WordData} from "../interfaces/app.interfaces";

@Component({
  selector: 'app-text-to-syllables',
  templateUrl: './text-to-syllables.component.html',
  styleUrls: ['./text-to-syllables.component.scss']
})
export class TextToSyllablesComponent implements OnInit {

  property!: string;
  result?: WordData[];

  constructor(
    private convertTextService: ConvertTextService
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.convertTextService.syllabify(this.property))
    this.result = this.convertTextService.syllabify(this.property);
  }
}
