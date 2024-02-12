import { Component } from '@angular/core';
import { CandidatureService } from '../../service/candidature.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-all-candidatures',
  templateUrl: './get-all-candidatures.component.html',
  styleUrl: './get-all-candidatures.component.css'
})
export class GetAllCandidaturesComponent {
  candidatures!: any[];
  cvBlob!: Blob;
  constructor(private candidatureService: CandidatureService,private router: Router) { }

  ngOnInit(): void {
    this.loadCandidatures();
  }

  //get all candidatures
  loadCandidatures(): void {
    this.candidatureService.getCandidatures().subscribe(
      data => {
        this.candidatures = data;
      },
      error => {
        console.log('Erreur lors du chargement des candidatures : ', error);
      }
    );
  }
  navigateTosaveCandidatures(){
    this.router.navigate(['/savecandidature']);
  }
  //get CV by name
  fetchCV(cvName:string,lastName:string,firstName:string): void {
    this.candidatureService.getCVByName(cvName,lastName,firstName).subscribe(
      (response: Blob) => {
        this.cvBlob = response;
        this.createCVObjectURL();
      },
      error => {
        console.error('Error fetching CV:', error);
      }
    );
  }
  createCVObjectURL(): void {
    const url = window.URL.createObjectURL(this.cvBlob);
    window.open(url); // Open the CV in a new tab or use other methods to display it
  }
}
