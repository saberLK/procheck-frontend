import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = ["http://localhost:1993/api"]

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http:HttpClient) {}

  //rest api save candidature
    saveCandidature(candidature: any):Observable<any> {
      return this.http.post(URL+'/candidature',candidature);
    }
  //rest api to upload cv in directory
    uploadCv(file:any):Observable<any> {
      return this.http.post(URL+'/cv',file);
    }
  //rest api to get all candidatures
    getCandidatures(): Observable<any> {
      return this.http.get(URL+'/all');
    }
//rest api to get a cv from a specific candidat
    getCVByName(cvName:string,lastName:string,firstName:string): Observable<any> {
      return this.http.get(`${URL+'/getcv/'}${cvName}/${lastName}/${firstName}`, { responseType: 'blob' });
    }
}
