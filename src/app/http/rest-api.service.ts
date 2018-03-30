import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class RestApiService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  public get() {
    const uri = 'https://grantadesign.atlassian.net/rest/api/2/user';
    const params = new HttpParams().set('username', 'eric.famanas');
    const basic = btoa('/*username:password*/');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authorization', 'Basic ' + basic);


    this.httpClient.get(uri, {
      headers: headers,
      params: params,
    }).subscribe((result) => {
      console.log(result);
    });
  }
}
