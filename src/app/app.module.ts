import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './components/etudiant-add/etudiant-add.component';
import { EtudiantEditComponent } from './components/etudiant-edit/etudiant-edit.component';

import { appRoutes } from './app.routes';
import { EtudiantService } from './services/etudiant.service';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantListComponent,
    EtudiantAddComponent,
    EtudiantEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule 
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
