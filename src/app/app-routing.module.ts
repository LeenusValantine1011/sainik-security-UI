import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeroComponent } from './hero/hero.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'services',component: ServicespageComponent},
  { path: 'products' , component: ProductsComponent },
  { path: 'contactus' , component: ContactUsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
