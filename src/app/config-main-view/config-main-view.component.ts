import {Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfigModalService} from '../service/config-modal.service';


@Component({
  selector: 'app-config-main-view',
  templateUrl: './config-main-view.component.html',
  styleUrls: ['./config-main-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigMainViewComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private readonly element: any;

  constructor(private configModalService: ConfigModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    // document.querySelector('main-layout').appendChild(this.element);
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'jw-modal') {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.configModalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.configModalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
}
