import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeroComponent } from './hero/hero.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'services',component: ServicespageComponent},
  { path: 'products' , component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
