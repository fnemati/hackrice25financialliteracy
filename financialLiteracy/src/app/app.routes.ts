import { Home } from './home/home';
import { Learn } from './learn/learn';
import { Practice } from './practice/practice';
import { Resources } from './resources/resources';
import { ModuleDetailComponent } from './module-detail/module-detail';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'learn', component: Learn },
  { path: 'practice', component: Practice },
  { path: 'resources', component: Resources },
  { path: 'modules/:id', component: ModuleDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } // default route
];