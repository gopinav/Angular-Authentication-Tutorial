import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EventService {

  private _eventsUrl = "/api/events";
  private _specialEventsUrl = "/api/special";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(this._eventsUrl)
  }

  getSpecialEvents() {
    return this.http.get(this._specialEventsUrl)
  }
}
