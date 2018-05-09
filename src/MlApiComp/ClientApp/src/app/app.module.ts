import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ExperimentComponent } from './experiment/experiment.component';
import { ExperimentService } from '../app/services/experiment.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperimentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: 'experiments/create', component: ExperimentComponent, pathMatch: 'full' },
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [
    ExperimentService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
