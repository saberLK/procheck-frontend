import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CandidatureService } from '../../service/candidature.service';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
/**
 * @title Stepper vertical
 */
@Component({
  selector: 'app-post-candidature',
  templateUrl: './post-candidature.component.html',
  styleUrl: './post-candidature.component.css',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
})
export class PostCandidatureComponent {
  isLinear:boolean=false;
  saveCandidatureForm!: FormGroup;
  CvForm!: FormGroup;
  cvFile!: File;
  cvBlob!: Blob;

constructor(private candidatureService:CandidatureService,private fb:FormBuilder,private router: Router){}
ngOnInit(){
  this.saveCandidatureForm = this.fb.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    studyLevel: ['', Validators.required],
    nbrYearsExp: ['', Validators.required],
    lastEmployer: ['', Validators.required],
    cvName: [''],
  })
  this.CvForm = this.fb.group({
    file: [null]
  })

}

//get cv by name
fetchCV(cvFile:Blob): void {

      this.cvBlob = cvFile;
      this.createCVObjectURL();

}

//open new tab for the selected CV
createCVObjectURL(): void {
  const url = window.URL.createObjectURL(this.cvBlob);
  window.open(url); // Open the CV in a new tab or use other methods to display it
}

onSubmit(): void {
  /*if (this.saveCandidatureForm.valid) {
    this.candidatureService.saveCandidature(this.saveCandidatureForm.value).subscribe()
    console.log('Form is valid');
  } else {
    console.log('Form is invalid');
    // Handle form validation errors
  }*/

}
navigateToCandidatures(): void {
  this.router.navigate(['/candidatures']);
}

//uploading cv and  saving the candidature
uploadCv(): void {

  //upload CV
    const formData = new FormData();
    formData.append('cvFile', this.cvFile,this.cvFile.name);
    formData.append('lastName',this.saveCandidatureForm.value.lastName);
    formData.append('firstName',this.saveCandidatureForm.value.firstName);
    this.candidatureService.uploadCv(formData).subscribe()

    //save data in candidature table
    if (this.saveCandidatureForm.valid) {
      this.saveCandidatureForm.value.cvName = this.cvFile.name;
      this.candidatureService.saveCandidature(this.saveCandidatureForm.value).subscribe()
      this.router.navigate(['/candidatures']);
    } else {
      console.log('Form is invalid');
      // Handle form validation errors
    }
}

//Selection CV check
onFileChange(event: any): void {
  this.cvFile = event.target.files[0];
}
}
