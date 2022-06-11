import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from '../modal/product';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Client[] = [
    new Client(1, "Nick", "Miller", "7/28/2022", "Drink"),
    new Client(2, "Ney", "Miller", "7/28/2022", "Drink"),
    new Client(3, "Car", "Folw", "7/29/2022", "Dunno"),
    new Client(4, "House", "M", "6/45/2022", "Okie"),
    new Client(5, "Frogs", "Don't die", "9/31/2022", "Memes"),
    new Client(6, "Beast", "Boy", "10/03/2022", "T-rex"),
  ]

  showProducts = true;

  categories = [
    {title: "Monday", total: 6},
    {title: "Tuesday", total: 6},
    {title: "Wednesday", total: 6},
    {title: "Thursday", total: 6},
    {title: "Friday", total: 6},
    {title: "Saturday", total: 6},
    {title: "Sunday", total: 6},
  ]

  clientForm = new FormGroup(
    {
      cid: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      date: new FormControl(),
      description: new FormControl(),
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

  addClientToDB(){
    
  }
}
