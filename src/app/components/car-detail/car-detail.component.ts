import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/model/carDetail';
import { CarImage } from 'src/app/model/carImage';
import { CarImagesService } from 'src/app/services/car-images.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: CarDetail;
  images: CarImage[] = [];
  apiUrl: string = 'https://localhost:44306';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImagesService: CarImagesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetail(params['carId']);
        this.getCarImages(params['carId']);
      }
    });
  }

  getCarDetail(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.car = response.data[0];
    });
  }

  getCarImages(carId: number) {
    this.carImagesService.getCarImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;
    });
  }
}
