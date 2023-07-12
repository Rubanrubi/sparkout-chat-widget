import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SparkoutChatWidgetService {

  public apiBaseURI: any;

  constructor(private http:HttpClient) { }

  /**
   * Stores digital fiels
   * @returns digital fiels
   */
  public storeDigitalFiels():Observable<any> {
    const req = new HttpRequest('GET', `${this.apiBaseURI}/answer/testyourfiles`);
    return this.http.request(req);
  }

  /**
   * Sends message
   * @param data
   * @returns
   */
  public sendMessage(data:any){
    const sendmessage= new HttpRequest('POST', `${this.apiBaseURI}/answer`, {'question':data});
    return this.http.request(sendmessage);
  }

  /**
   * Sets base uri
   * @param baseURI
   */
  public setBaseURI(baseURI: string) {
    this.apiBaseURI = baseURI;
  }
}
