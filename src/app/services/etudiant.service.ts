import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = '/api/etudiants'; // Remplacez par l'URL correcte de votre backend

  constructor(private http: HttpClient) {}

  // Récupérer tous les étudiants
  getEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer un étudiant par son ID
  getEtudiantById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouvel étudiant
  addEtudiant(etudiant: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, etudiant);
  }

  // Mettre à jour un étudiant
  updateEtudiant(id: number, etudiant: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, etudiant);
  }

  // Supprimer un étudiant
  deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
