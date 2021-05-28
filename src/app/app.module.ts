import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ScannerComponent } from './scanner/scanner.component';
import { ZXingScannerModule } from "@zxing/ngx-scanner";

import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { ThirdStepComponent } from './third-step/third-step.component';
import { FourthStepComponent } from './fourth-step/fourth-step.component';
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { ProductDetailsComponent } from './shopping-cart/product-details/product-details.component';
import { CartService } from './shopping-cart/cart.service';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { ShippingComponent } from './shopping-cart/shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FirstStepComponent,
    SecondStepComponent,
    ScannerComponent,
    ThirdStepComponent,
    FourthStepComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ZXingScannerModule,
    NgxQRCodeModule,
    BarcodeScannerLivestreamModule,

    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
