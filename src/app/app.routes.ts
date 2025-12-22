import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { Booking } from './pages/booking/booking';

export const routes: Routes = [
    {path : "", component : Home },
    {path : "contact-us", component : Contact},
    // {path : "booking/:carName", component : Booking},
    {path : "**", component : Pagenotfound}

];
