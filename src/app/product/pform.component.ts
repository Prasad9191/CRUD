import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
    selector:"pform",
    templateUrl:"./pform.component.html",
    styleUrls:['./pform.component.css']
})
export class pformComponent{
    constructor(private pservice:ProductService){

    }
    pid:number;
    pname:string;
    price:number;
    @Output() myevent=new EventEmitter();
    @Input("upprod") prod:Product;
    ngOnChanges(change:SimpleChanges){//here we display the prob object
        console.log(change);
        if(change["prod"].currentValue!=change["prod"]){
            this.pid=this.prod.pid;
            this.pname=this.prod.pname;
            this.price=this.prod.price;
        }
    }
    addproduct(){
        let p=new Product(this.pid,this.pname,this.price);
        console.log(p);
        this.pservice.addProduct(p);
        this.pid=0;
        this.pname="";
        this.price=0;
        //this will change the  value of flag  into ptag to false
        this.myevent.emit(false);//here we pass obj ,variable 
    }
    updateproduct(){
        let p=new Product(this.pid,this.pname,this.price);
        this.pservice.updateproduct(p);
        this.pid=0;//this will clear the form
        this.pname="";
        this.price=0;
        
        this.myevent.emit(false);//here we pass obj ,variable 
 
    }
}