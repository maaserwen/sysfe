import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {
  @ViewChild('blogContainer', {static: false})
  blogContainer: ElementRef;

  text: any = '';

  content = `<div>
  <h1 id="1">一级标题1</h1>
  <h2 id="1-1">二级标题1</h2>
  <h3 id="1-1-1">三级标题1</h3>
  <h3 id="1-1-2">三级标题2</h3>
</div>
<div>
  <h1 id="2">一级标题1</h1>
  <h2 id="2-1">二级标题1</h2>
  <h3 id="2-1-1">三级标题1</h3>
  <h2 id="2-2">二级标题2</h2>
  <h3 id="2-2-1">三级标题1</h3>
</div>`;

  anchorList: any = [
    {
      title: '这是大标题',
      href: '#aa',
      children: [
        {
          title: '二级标题',
          href: '#bb'
        },
        {
          title: '第二个二级标题',
          href: '#dd'
        }
      ]
    },
    {
      title: '另一个大标题',
      href: '#ff'
    }
  ];
  scrollAnimateLock = false;

  @HostListener('window: scroll', ['$event'])
  onWindowScroll($event: Event) {
    if (!this.scrollAnimateLock) {
      requestAnimationFrame(() => {
        this.scrollAnimateLock = false;
      });
      this.scrollAnimateLock = true;
    }
  }

  getAnchors(element) {
    return element.children.length
      ? (Array.from(element.children) as Array<HTMLElement>)
          // .filter(item => /H[1-7]/.test(item.tagName))
          .map(item => {
            return {
              id: item.id,
              text: item.innerText,
              contentStart: item.getBoundingClientRect().top,
              children: this.getAnchors(item)
            };
          })
      : [];
  }

  traversingTree(element) {
    // let
  }

  constructor(
    private sanitizer: DomSanitizer,
  ) {

  }

  ngOnInit() {
    this.text = this.sanitizer.bypassSecurityTrustHtml(this.content);
  }

  ngAfterViewInit() {
    const arr = this.getAnchors(this.blogContainer.nativeElement);
    console.log(arr);
  }

}
