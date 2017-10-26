import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KeepersComponent } from './components/keeper/keepers.component';

export const APP_ROUTES = [{
    path: '',
    component: HomeComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'animals',
    component: AnimalsComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'keepers',
    component: KeepersComponent
  }
];
