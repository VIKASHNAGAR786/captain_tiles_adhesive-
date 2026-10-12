import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'Captain Tiles Adhesive | Build with confidence' },
	{ path: 'products/captain-dura-bond', component: ProductDetailComponent, title: 'Dura Bond | Captain Tiles Adhesive' },
	{ path: 'about', component: AboutComponent, title: 'About Captain Tiles Adhesive' },
	{ path: 'contact', component: ContactComponent, title: 'Contact Captain Tiles Adhesive' },
	{ path: '**', redirectTo: '' },
];
