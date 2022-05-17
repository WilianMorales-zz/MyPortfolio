import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  workPortfolio: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWorkPortfolio();
  }

  getWorkPortfolio() {
    this.http.get('http://localhost:4200/assets/data/work.json')
    .subscribe((work) => {
      this.workPortfolio = work;
    });
  }

}
