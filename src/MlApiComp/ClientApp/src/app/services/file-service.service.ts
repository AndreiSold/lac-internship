import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class FileServiceService {

  baseUrl: string;  

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:49350/api/files';
  }// 49350 / 52339

  postFile(fileToUpload: File, googleResult : String, azureResult : String): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.httpClient.post(this.baseUrl, formData).map((data) => {
      return data;
    }).catch((err: HttpErrorResponse) => {
      console.error('An error occured:', err.error);
      return Observable.empty<any>();
    });
  }

  

}
