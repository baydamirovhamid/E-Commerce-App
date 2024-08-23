import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrl: './baskets.component.scss'
})
export class BasketsComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService)
  {
    super(spinner);
  }
  ngOnInit(): void {
    /*this.showSpinner(SpinnerType.BallAtom);*/
  }

}
