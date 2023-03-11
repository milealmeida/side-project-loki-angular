import { Component, OnInit } from '@angular/core';
import { Info } from '../shared/info.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  infos: Info[] = [
    new Info('Loki', 51, 2021, '', '', '')
  ];

  constructor() {}

  ngOnInit(): void {}
}
