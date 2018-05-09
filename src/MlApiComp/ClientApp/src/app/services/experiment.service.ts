import { Injectable } from '@angular/core';
import { Experiment } from '../models/experiment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'


@Injectable()
export class ExperimentService {

  url: string = "http://localhost:49350/api/experiments"

  constructor(private http: HttpClient)
  { }

  createExperiment(exp: Experiment): Observable<Experiment> {
    return this.http.post<Experiment>(this.url, exp);
  }

}
