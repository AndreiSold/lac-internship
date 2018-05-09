import { Component, OnInit } from '@angular/core';
import { Experiment } from '../models/experiment';
import { ExperimentService } from '../services/experiment.service'

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  experiment: Experiment = new Experiment;
  newExperiment: Experiment = new Experiment;


  constructor(private expSer: ExperimentService) { }

  ngOnInit() {
  }

  onSubmit() {
    let form = <HTMLFormElement>document.getElementById('create-form');
    this.experiment.name = (<HTMLInputElement>document.getElementById("Name")).value;
    this.experiment.cost = (<HTMLInputElement>document.getElementById("Cost")).valueAsNumber;
    this.experiment.eventDate = (<HTMLInputElement>document.getElementById("Date")).valueAsDate;
    this.experiment.executorName = (<HTMLInputElement>document.getElementById("ExecutorName")).value;

    this.expSer.createExperiment(this.experiment).subscribe(data =>
    {
      this.newExperiment.name = data.name;
      this.newExperiment.cost = data.cost;
      this.newExperiment.eventDate = data.eventDate;
      this.newExperiment.executorName = data.executorName;

      console.log(this.newExperiment.name, this.newExperiment.cost, this.newExperiment.eventDate, this.newExperiment.executorName);
    })

    //form.submit();
 }

}
