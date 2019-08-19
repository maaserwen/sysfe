import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  data = new Array(5).fill({}).map((i, index) => {
    return {
      href: `/detail/${index}`,
      title: `ant design part ${index}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      // tslint:disable-next-line:max-line-length
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    };
  });

  constructor() { }

  ngOnInit() {
  }

}
