import { Component, Injectable } from '@angular/core';
import {Product} from './product.model';
@Injectable()// predefined service
//we write this class bcz of comman obj used into others componets
export class ProductService{

    parr=[new Product(12,"lays",30.00),
    new Product(13,"nachos",120.00),
    new Product(14,"Cocca Cola",40.00),
     new Product(15,"cheeps",50.00)];

    getAllProduct():Product[]{//product[] return type
        return this.parr;
    }
    addProduct(p:Product)
    {
        this.parr.push(p);
    }
    updateproduct(p:Product){
        for(let i=0;i<this.parr.length;i++){
            if(this.parr[i].pid==p.pid){
                this.parr[i].pname=p.pname;
                this.parr[i].price=p.price;
                break;
            }
        }
    }
    deleteprod(p:Product){
        for(let i=0;i<this.parr.length;i++){
            if(this.parr[i].pid==p.pid){
                this.parr.splice(i,1);//this will delte one object
                break;
            }
        }
    }
    
}