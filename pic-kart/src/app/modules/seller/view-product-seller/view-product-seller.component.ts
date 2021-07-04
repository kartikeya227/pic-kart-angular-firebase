import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-view-product-seller',
  templateUrl: './view-product-seller.component.html',
  styleUrls: ['./view-product-seller.component.sass']
})
export class ViewProductSellerComponent implements OnInit {
  productList!: any;
  userDetails!: User;
  productArray!: Array<string>;
  constructor(private afs: AngularFirestore) { }

  getProductList(){
    this.productArray.forEach(element => {
      this.afs.doc<Object>('product/'+element).valueChanges()
      .subscribe(product => {
        if(product!=undefined && product != null){
          this.productList = product;
        }
      });
    });
  }
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(user != null){
      this.userDetails = JSON.parse(user);
      if(this.userDetails.productList!=undefined)
      this.productArray = this.userDetails.productList;
    }
    this.getProductList();
  }

}
