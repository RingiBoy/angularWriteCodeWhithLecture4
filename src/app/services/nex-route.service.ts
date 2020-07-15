import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NexRouteService implements CanActivate{

  constructor() {

  }

    canActivate(): boolean  {
    return true;
    }
}
