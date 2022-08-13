import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  age = '';
  constructor() { }

  ngOnInit(): void {
    this.calcAge()
    console.log(this.age)
  }

  calcAge() {
    const diff = Math.floor(dayjs().diff('2019-08-04', 'month', true));
    this.age = `${Math.floor(diff / 12)} years${diff % 12 !== 0 ? ` and ${diff % 12} ${diff % 12 === 1 ? 'month': 'months'}`: ''}`;
  }

}
