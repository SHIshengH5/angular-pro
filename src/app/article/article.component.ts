import { Component, OnInit, Input } from '@angular/core';
import { Article } from "app/article/article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class:"abc",
    id:"abc",
    "data-id":"你好"
  }
})
export class ArticleComponent implements OnInit {
  @Input()
  private article:Article;
  constructor() { 
    //this.article = new Article("你好我是类创建的","http://www.baidu.com",10);
  }

  ngOnInit() {
  }
  
  voteUp():boolean{
    this.article.voteUp();
    return false;
  }
  voteDown():boolean{
    this.article.voteDown();
    return false;
  }
}
