import { Component, OnInit } from '@angular/core';
import {ConfigModalService} from '../service/config-modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bodyText: string;

  constructor(private configModalService: ConfigModalService) { }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string): void {
    this.configModalService.open(id);
  }

  closeModal(id: string): void {
    this.configModalService.close(id);
  }

}
