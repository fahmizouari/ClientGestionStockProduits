import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {Produit} from './produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produits:Produit[];
  selectedProduit:Produit;

  operation:string ='add';
  selectedRef:string='';
  produitForm: FormGroup;
  constructor(private produitService: ProduitService,private fb :FormBuilder, private route:ActivatedRoute) {
    
    this.createForm();
   }

   createForm(){
    this.produitForm=this.fb.group(
      {
        ref: ['',Validators.required],
        quantite:'',
        prixunitaire:''
      }
    );
   }
  ngOnInit(): void {
    this.initProduit();
    //this.loadProduits();
    this.produits=this.route.snapshot.data.produits;
  }

  

  loadProduits(){
    this.produitService.getProduit().subscribe(
      data=>{this.produits=data},
      error=>{console.log('an error was occured')},
      ()=>(console.log('loading produit was done'))
    );
  }

  addProduit(){
    const p=this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      res=>{
        this.initProduit();
        this.loadProduits();
      }
    );

  }

  updateProduit(){
    this.produitService.updateProduit(this.selectedProduit).subscribe(
      res=>{
        this.initProduit();
        this.loadProduits();
      }
    );

  }

  deleteProduit(){
    this.produitService.deleteProduit(this.selectedProduit.id).subscribe(
      res=>{
        this.selectedProduit=new Produit();
        this.loadProduits();
      }
    );

  }
  initProduit(){
    this.selectedProduit=new Produit();
    this.createForm();

  }

}
