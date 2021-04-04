import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/model/brand';
import { BrandService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand:Brand;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands= response.data
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand)
    {
      return "list-group-item activated"
    }
    else
    {
      return "list-group-item ls-bg"
    }
  }

}
