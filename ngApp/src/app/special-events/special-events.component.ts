import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private _eventService: EventService) { }


  ngOnInit() {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
