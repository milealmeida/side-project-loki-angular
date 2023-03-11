import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/shared/info.module';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  infos: Info[] = [
    new Info(
      '',
      51,
      2021,
      'https://www.disneyplus.com/pt-br/series/loki/6pARMvILBGzF',
      'https://www.youtube.com/watch?v=nW948Va-l10',
      '',
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
