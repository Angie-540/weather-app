import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherDataService() {
    let url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f7c4cd7ddf74d96d65524df103a7c5d1";
    return this.http.get(url);
    
  }
}
