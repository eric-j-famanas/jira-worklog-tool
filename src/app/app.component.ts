import { Component } from '@angular/core';
import { RestApiService } from './http/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private readonly restApi: RestApiService) {
  }

  public test() {
    this.restApi.get();
  }
}
