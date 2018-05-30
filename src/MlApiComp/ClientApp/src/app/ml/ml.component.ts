import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MlService } from '../services/ml.service';
import { FileServiceService } from '../services/file-service.service';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.scss']
})
export class MlComponent {

  previewPath: string;
  googleApiResponse: string;
  azureApiResponse: string;
  file: Blob;

  constructor(private mlservice: MlService, private FileService: FileServiceService) { }

  onFileSelected(event) {

    this.file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewPath = e.target.result;
    }

    this.saveFile(this.file);

    reader.readAsDataURL(this.file);
  }

  saveFile(file) {
    this.FileService.postFile(file)
      .subscribe(data => {
      this.file = data;
    }, error => {
      console.log(error);
    });
  }

  


  getImageInformation() {
    this.mlservice.predictGoogle(this.file)
      .subscribe(x => this.googleApiResponse = x);

    this.mlservice.predictAzure(this.file)
      .subscribe(x => this.azureApiResponse = x);
  }
}
