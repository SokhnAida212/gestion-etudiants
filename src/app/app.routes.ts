import { Routes } from '@angular/router';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './components/etudiant-add/etudiant-add.component';
import { EtudiantEditComponent } from './components/etudiant-edit/etudiant-edit.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/etudiants', pathMatch: 'full' },
  { path: 'etudiants', component: EtudiantListComponent },
  { path: 'add', component: EtudiantAddComponent },
  { path: 'edit/:id', component: EtudiantEditComponent }
];
