import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';

export const routes: Routes = [
    {path : "", component : Home },
    {path : "contact-us", component : Contact},
    {path : "**", component : Pagenotfound}

];
