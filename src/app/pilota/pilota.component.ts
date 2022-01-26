import { Component, OnInit } from '@angular/core';
import { PilotaModel } from '../models/pilota.model';
import { PilotaService } from '../pilota.service';

@Component({
  selector: 'app-pilota',
  templateUrl: './pilota.component.html',
  styleUrls: ['./pilota.component.css']
})
export class PilotaComponent implements OnInit {

  public pilotak: PilotaModel[] = [];
  constructor(private szerviz:PilotaService) {
    this.szerviz.getPilotak().subscribe(adatok => {
      this.pilotak = adatok;
    })
  }

  ngOnInit(): void {
  }

}
