import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../../models/news';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nyt-news-item',
  imports: [NgFor, DatePipe],
  standalone: true,
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})

export class NewsItemComponent implements OnInit {

  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
