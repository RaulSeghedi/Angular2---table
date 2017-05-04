import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  columnName = ['name', 'ocupation', 'field', 'delete'];
  itemName = [{name: {}, ocupation: {}, field: {}}];
}
