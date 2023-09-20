import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = 'b994f6cc4be269fd390c57af7841f1ba&lang=es&units=metric';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo (ciudad: string, codigo: string, lang: string) {
    const url= `${ urlBase }?q=${ ciudad },${ codigo }&appid=${appId}`;

    return this.http.get(url);
  }
}
