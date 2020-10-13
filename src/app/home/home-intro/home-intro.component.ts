import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.css']
})
export class HomeIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('g-loc').style.display = 'flex';
    }, 2500)
  }
}
