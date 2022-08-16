import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    http.get('WeatherForecast').subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        debugger;
      }
    );
  }
  title = 'demoapp';
}
