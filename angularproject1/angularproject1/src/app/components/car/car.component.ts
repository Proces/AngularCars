import { Component, OnInit } from '@angular/core';
import { CarsHttpService} from '../../api/services/cars-http.service';
import {Cars} from '../../api/models/Cars'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars: Cars[] = []
  constructor(private carsHttpService: CarsHttpService) {
    this.getAll()
  }

  ngOnInit(): void {
  }

  getAll(){
     return this.carsHttpService.getAll().subscribe({
       next: cars => {
         this.cars = cars
       },
       error: error => console.error(error)
     })
  }

  delete(id: number){
    this.carsHttpService.delete(id).subscribe({
      next: () => location.reload(),
      error: error => console.error(error)
    })
  }
}
