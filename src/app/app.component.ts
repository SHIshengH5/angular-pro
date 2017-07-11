import { Component } from '@angular/core';
import { Article } from "app/article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private articles: Article[];
  constructor() {
    this.articles = [
      new Article("我是第一个", "http://www.baidu.com", 1),
      new Article("我是第二个", "http://www.baidu.com", 2),
      new Article("我是第三个", "http://www.baidu.com", 5),
    ];
  }
  getDate(newtitle: HTMLInputElement, newLink: HTMLInputElement) {
    if(!newtitle.value || !newLink.value){
      return false;
    }
    this.articles.push(new Article(newtitle.value, newLink.value));
    console.log(`你好:${newtitle.value}===${newLink.value}`);
    //做到清除记录
    newtitle.value = '';
    newLink.value = '';
    return false;
  }
  //定义一个排序的方法
  sortArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
