import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
    selector:"ptab",
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']
})

export class PtabComponent{
    parr:Product[];
    pob:Product;
    flag=false;
    constructor(private pservice:ProductService){
        console.log("Ptab constructor called");
    }
    ngOnInit(){
        console.log("plist init called");
        this.parr=this.pservice.getAllProduct();
        
    }
    updateproduct(p:Product){
        this.flag=true;
        //this will assign product to child product
        this.pob=p;
    }
    deleteproduct(p:Product){
        this.pservice.deleteprod(p);
    }
    displatForm(){
        this.flag=true;
    }
}