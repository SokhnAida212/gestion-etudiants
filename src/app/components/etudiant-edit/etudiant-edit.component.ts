import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit {
  etudiant: any = {};

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.etudiantService.getEtudiantById(+id).subscribe((data) => {
        this.etudiant = data;
      });
    }
  }

  onSubmit(): void {
    this.etudiantService.updateEtudiant(this.etudiant.id, this.etudiant).subscribe(() => {
      this.router.navigate(['/etudiants']);
    });
  }
}

