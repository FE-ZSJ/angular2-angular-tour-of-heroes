/**
 * Created by zhusujuan on 2017/3/7.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable  } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit{
  heroes: Observable <Hero[]>; //Subject也是一个observable对象
  private searchTerms = new Subject<string>();//Subject是一个可观察的事件流中的生产者，生成的字符串observable

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router){}

    // Push a search term into the observable stream.
    search(term: string): void{
      this.searchTerms.next(term);//把新的字符串放在可观察流中
    }

    ngOnInit(): void{
      this.heroes = this.searchTerms
        .debounceTime(300)  // 等待300ms保证请求间隔不少于300ms
        .distinctUntilChanged()  // 条件变化的时候发送请求
        .switchMap(term => term   // 只返回最近一次http调用返回的可观察对象
          ? this.heroSearchService.search(term)
          : Observable.of<Hero[]>([]))//如果搜索框为空，返回一个包含空数组的可观察对象。
        .catch(error =>{
          // TODO: add real error handling
          console.log(error);
          return Observable.of<Hero[]>();//清空搜索结果
        })
    }

    gotoDetail(hero: Hero): void{
        let link = ['./detail',hero.id];
        this.router.navigate(link);
    }
}


