import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Product} from '../product.model';
import { ProductService } from '../product.service';
@Component({
    selector:"plist",
    templateUrl:'./plist.component.html',
    styleUrls:['./plist.component.css']
})

export class PlistComponent implements OnInit{
    parr:Product[];
   constructor(private pservice:ProductService){//angular object created we used here
        console.log("plist constructor called");
   }
   //we want to print object array
   ngOnInit(){
       console.log("ngInit plist called");
       this.parr=this.pservice.getAllProduct();
   }
}