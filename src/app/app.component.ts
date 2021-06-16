import { Component, OnInit } from '@angular/core';
import airesourcesBlackBox from '../assets/ai-resources-blackbox.json';
import airesourcesWhiteBox from '../assets/ai-resources-whitebox.json';
import airesourcesFairness from '../assets/ai-resources-fairness.json';
import airesourcesSensitivity from '../assets/ai-resources-sensitivity.json';

import { AgileBestPracticesIndexComponent } from './agile-best-practices-index/agile-best-practices-index.component';
import { GraphDataScienceComponent } from './graph-data-science/graph-data-science.component'

import aidefs from '../assets/ai-definitions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  selfdescription: any = [];
  definitions: any = {};
  counter: number = 0;
  selected: any = {};
  selectedButton: any = "btn";
  triggerTab1: boolean = false;
  triggerTab2: boolean = false;
  triggerTab3: boolean = false;

  constructor() {
   }

  ngOnInit() {
    this.selfdescription = airesourcesBlackBox;
    this.definitions = aidefs;
  }

  selectionChanged(event){
    this.selected = event;
    console.log(this.selected);
  }

  triggerTabChange(event) {
    if (event.target.id == "explainableAIResources") {
      this.triggerTab1 = true;
    }
    else if (event.target.id == "agileAIFrameworks") {
      this.triggerTab2 = true;
    }
    else if (event.target.id == "agileAIFrameworks") {
      this.triggerTab3 = true;
    }
    console.log(event);
  }

  handleButtonChange(event) {
    if (event.srcElement.id == "btn-blackbox") {
      this.selectedButton = event.srcElement.id;
      this.selfdescription = airesourcesBlackBox;
      console.log(event.srcElement.id);
    }
    else if (event.srcElement.id == "btn-whitebox") {
      this.selectedButton = event.srcElement.id;
      this.selfdescription = airesourcesWhiteBox;
      console.log(event.srcElement.id);
    }
    else if (event.srcElement.id == "btn-fairness") {
      this.selectedButton = event.srcElement.id;
      this.selfdescription = airesourcesFairness;
      console.log(event.srcElement.id);
    }
    else if (event.srcElement.id == "btn-sensitivity") {
      this.selectedButton = event.srcElement.id;
      this.selfdescription = airesourcesSensitivity;
      console.log(event.srcElement.id);
    }
  }

  getResourceType(status) {
    if (status.paper === true) {
      return "Paper";
    }
    else if (status.tool === true) {
      return "Tool";
    }
    else if (status.method === true) {
      return "Method";
    }
  }

  getDataType(status) {
    if (status.image === true && status.text == true && status.tabular == true) {
      return "Image, text, tabular";
    }
    else if (status.image === true && status.text == true) {
      return "Image, text";
    }
    else if (status.tabular === true) {
      return "Tabular";
    }
    else if (status.text === true) {
      return "Text";
    }
    else if (status.image === true) {
      return "Image";
    }
    else if (status.graph === true) {
      return "Graph";
    }
  }

  getLocalOrGlobal(status) {
    if (status.local === true) {
      return "Local";
    }
    else if (status.global === true) {
      return "Global";
    }
  }

  getPurposeOfInterpretability(status) {
    if (status.intrinsic === true) {
      return "White Box";
    }
    else if (status.postHoc === true) {
      return "Black Box";
    }
    else if (status.enhanceFairness === true) {
      return "Enhance fairness of model";
    }
    else if (status.testSensitivityOfPredictions === true) {
      return "Test sensitivity of predictions";
    }
  }

  getModelSpecificOrAgnostic(status) {
    if (status.specific === true) {
      return "Specific";
    }
    else if (status.agnostic === true) {
      return "Agnostic";
    }
    else if (status.enhanceFairness === true) {
      return "Enhance Fairness";
    }
    else if (status.testSensitivityOfPredictions === true) {
      return "Test Sensitivity of predictions";
    }
  }

}
