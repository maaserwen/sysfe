import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  role: string;
  selectedMenu = '';
  MENUDATA = {
    1: [{
      path: 'info',
      label: '学校概况'
    }, {
      path: 'query',
      label: '查询成绩'
    }, {
      path: 'choose',
      label: '选课'
    }, {
      path: 'query-class',
      label: '课表查询'
    }],
    2: [{
      path: 'info',
      label: '学校概况'
    }, {
      path: 'upload',
      label: '上传成绩'
    }],
    3: [{
      path: 'info',
      label: '学校概况'
    }, {
      path: 'class',
      label: '课程管理'
    }, {
      path: 'account',
      label: '账号管理'
    }]
  };

  constructor(
    private route: Router,
  ) { }

  logout() {
    sessionStorage.removeItem('user');
    this.route.navigate(['/login']);
  }

  ngOnInit() {
    const { username, role } = JSON.parse(sessionStorage.getItem('user'));
    if (!username) {
      this.route.navigate(['/login']);
    }
    this.role = role;
    const {pathname} = location;
    const pathArr = pathname.split('/');
    this.selectedMenu = pathArr.pop();
  }

}
