import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'skillbar',
  templateUrl: './skillbar.component.html',
  styleUrls: ['./skillbar.component.css']
})
export class SkillbarComponent implements OnInit {

  @Input() ngStyle: { [key: string]: string; }

  @Input() text: string;
  @Input() width: string;
  @Input() bgcolor: string;

  @ViewChild('skillbar') el: ElementRef;

  container = {
    "width": "100%",
    "background-color": "#eee"
  }
  skill_level = {
    "text-align": "right",
    "padding": "10px",
    "color": "white"
  }

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.children[1].children[0].style.backgroundColor = this.bgcolor;
    this.el.nativeElement.children[1].children[0].style.width = this.width + "%";

  }

}
