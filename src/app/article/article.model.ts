export class Article {
    //类似java中定义属性
    title: string;
    link: string;
    votes: number;

    //类似java中的构造函数
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }
}