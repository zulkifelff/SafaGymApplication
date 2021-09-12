import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {

  constructor() {
  }

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
}
