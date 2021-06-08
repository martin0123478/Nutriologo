import { Component, OnInit } from '@angular/core';
import {PacientService} from '../../../core/services/pacient.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(
    private service:PacientService
  ) { }

  ngOnInit(): void {
  }
  getFile() {
    this.service.getFile()
      .subscribe(content => {
        var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, 'Manual-de-Usuario.pdf');
      });
  }

}
