import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nz-modal',
  templateUrl: './nz-modal.component.html',
  styleUrls: ['./nz-modal.component.css']
})
export class NzModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
