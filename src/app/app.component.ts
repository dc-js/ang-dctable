import { Component } from '@angular/core';
import * as dc from 'dc';
import * as dctable from 'dc.datatables';
import * as pageResize from './dataTables.pageResize.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-dctable';
}
console.log(dc);
console.log(dctable);
console.log('pr', pageResize);
