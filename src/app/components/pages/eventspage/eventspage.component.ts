import { Component, OnInit } from '@angular/core';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  description: string;
}

@Component({
  selector: 'app-eventspage',
  standalone:true , 
  templateUrl: './eventspage.component.html',
  styleUrls: ['./eventspage.component.css']
})
export class EventspageComponent implements OnInit {
  events: Event[] = [
    { id: 1, name: 'Book Club Meeting', date: '2024-05-01', time: '10:00 AM', description: 'Discussing the latest book.' },
    { id: 2, name: 'Author Visit', date: '2024-05-02', time: '02:00 PM', description: 'Meet and greet with a famous author.' },
    { id: 3, name: 'Poetry Reading', date: '2024-05-03', time: '06:00 PM', description: 'Local poets read their latest works.' },
    { id: 4, name: 'Children Storytime', date: '2024-05-04', time: '10:00 AM', description: 'Storytime for children aged 3-5.' },
    { id: 5, name: 'Historical Lecture', date: '2024-05-05', time: '11:00 AM', description: 'A lecture on local history.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
