import { WeatherData } from './models/weather.models';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {

  }
  
  cityName : string = 'London';
  weatherData? :WeatherData;

  ngOnInit(): void {
    // this.getWeatherData(this.cityName);
   
  }

  // onSubmit () {
  //   this.getWeatherData(this.cityName);
  //   this.cityName = '';
  // }


    public getWeatherData(cityName: string) {
      const weatherData = this.weatherService.getWeatherDataService()
      .subscribe(data => {
        console.log("data", data)
      }
      )

      }
  
}

