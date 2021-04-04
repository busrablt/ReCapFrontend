import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  currentCar:Car;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"])
      {
        this.getCarsByBrand(params["brandId"])
      }
      else if (params["colorId"])
      {
        this.getCarsByBrand(params["colorId"])
      }
      else 
      {
        this.getCars();
      }
    })
   
  }
  
  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.cars= response.data
    })
  }

  setCarBrand(brand:Car){
    this.currentCar=brand;
  }

  getCarBrandClass(brand:Car){
    if(brand==this.currentCar)
    {
      return "list-group-item active"
    }
    else
    {
      return "list-group-item "
    }
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response)=>{
      this.cars=response.data
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe((response)=>{
      this.cars=response.data
    })
  }

}
