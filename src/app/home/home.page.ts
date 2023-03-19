import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { filter } from 'rxjs';

type Menu = {
  icon?: string;
  name: string;
  url?: string;
  children?: ChildrenMenu[];
  isOpen?: boolean;
}

type ChildrenMenu = {
  name: string;
  url: string;
  num?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  id: number;

  currentUrl: string;
  imgValue: string;
  menus: Menu[] = [
    {
      icon: 'assets/icons/home.svg',
      name: 'HOME',
      url: '/'
    },
    {
      icon: 'assets/icons/install.svg',
      name: '설치',
      children: [
        {
          name: '접수',
          url: '/install/receipt',
          num: 1
        },
        {
          name: '준비',
          url: '/install/setup',
          num: 2
        },
        {
          name: '출고',
          url: '/install/release',
          num: 3
        },
        {
          name: '설치',
          url: '/install/install',
          num: 4
        }
      ],
      isOpen: false
    },
    {
      icon: 'assets/icons/AS.svg',
      name: 'AS',
      children: [
        {
          name: '준비',
          url: '/AS/setup',
          num: 5
        },
        {
          name: '접수',
          url: '/AS/receipt',
          num: 6
        },
        {
          name: '출고',
          url: '/AS/release',
          num: 7
        },
        {
          name: 'AS',
          url: '/AS/as',
          num: 8
        },
        {
          name: '회수',
          url: '/AS/retrive',
          num: 9
        }
      ],
      isOpen: false
    },
    {
      icon: 'assets/icons/register.svg',
      name: '등록',
      children: [
        {
          name: '물품',
          url: '/register/products',
          num: 10
        },
        {
          name: '솔루션',
          url: '/register/solution',
          num: 11
        },
        {
          name: '업체별',
          url: '/register/company',
          num: 12
        }
      ],
      isOpen: false
    },
    {
      icon: 'assets/icons/management.svg',
      name: '관리',
      children: [
        {
          name: '재고변경',
          url: '/service/changeStocks',
          num: 13
        },
        {
          name: '입출고내역',
          url: '/service/InOutInfo',
          num: 14
        }
      ]
    },
    {
      icon: 'assets/icons/basong.svg',
      name: '정산',
      url: '/calc'
    }
  ]
  // https://api-kmachine-dev.enjoysoft.net:7091/api/KMachine/v1/GetTabletWaitScreenList

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.http.post('/enjoysoft/GetTabletWaitScreenList', { body: 40 }).subscribe({
      next: (res) => {
        console.log(res);
        console.log('TT');
      },
      error: (err) => {
        // console.log(err);
        console.log('asfsafasf');
      }
    })
  }

  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.currentUrl = res['url'];
      }
    })
  }

  clickedChild(e: any) {
    console.log(this.currentUrl)
    // if(this.currentUrl )
  }

}
