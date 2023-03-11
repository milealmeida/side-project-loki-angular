import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/shared/info.module';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  infos: Info[] = [
    new Info(
      '',
      51,
      2021,
      '',
      '',
      'Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”.',
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
