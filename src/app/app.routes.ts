import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { ProductsComponent } from './features/products/products.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { BlogComponent } from './features/blog/blog.component';
import { TradeEnquiryComponent } from './features/trade-enquiry/trade-enquiry.component';
import { CalculatorPageComponent } from './features/calculator/calculator-page.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'Captain Tiles Adhesive | Build with confidence' },
	{ path: 'products', component: ProductsComponent, title: 'Captain Tiles Adhesive | Product catalogue' },
	{ path: 'products/:slug', component: ProductDetailComponent, title: 'Captain Tiles Adhesive | Product details' },
	{ path: 'calculator', component: CalculatorPageComponent, title: 'Tile Adhesive Coverage Calculator | Captain Tiles Adhesive' },
	{ path: 'about', component: AboutComponent, title: 'About Captain Tiles Adhesive' },
	{ path: 'contact', component: ContactComponent, title: 'Contact Captain Tiles Adhesive' },
	{ path: 'blog', component: BlogComponent, title: 'Captain Tiles Adhesive | Journal' },
	{ path: 'trade-enquiry', component: TradeEnquiryComponent, title: 'Captain Tiles Adhesive | Trade enquiry' },
	{ path: '**', redirectTo: '' },
];
