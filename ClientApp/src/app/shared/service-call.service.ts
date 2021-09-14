import {Inject, Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PlatformLocation } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string,platformLocation: PlatformLocation) {

    console.log((platformLocation as any).location);
    console.log((platformLocation as any).location.href);
    console.log((platformLocation as any).location.origin);
    this.localBaseURL=baseUrl;
    console.info(this.localBaseURL);

  }
private localBaseURL:string;
  private toggleNavigationSubject = new Subject<any>();

  sendToggleNavigationMessage(incomingValue: any) {
    this.toggleNavigationSubject.next(incomingValue);
  }

  clearToggleNavigationMessages() {
    this.toggleNavigationSubject.next();
  }

  getToggleNavigationMessage(): Observable<any> {
    return this.toggleNavigationSubject.asObservable();
  }

  postFile(fileToUpload: File) {
    debugger;
    const files: FormData = new FormData();
    files.append('files', fileToUpload);
    const destinationURL = this.localBaseURL+'api/' + 'ContentUpload';
    return this.http.post(destinationURL, files);
  }
}
