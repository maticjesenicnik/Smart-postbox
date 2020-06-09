import { Injectable } from "@angular/core";
import { Postbox } from './postbox.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostboxService {
  private postboxes: Postbox[] = [];
  private postboxesUpdated = new Subject<{postboxes: Postbox[]}>();

  constructor(private http: HttpClient, private router: Router){}

  getPostboxes(userId: string){
    this.http.get<{message: string, postBoxes: any}>('http://localhost:3000/api/postBox/' + userId)
    .pipe(map((postboxData) => {
      return {
        postboxes: postboxData.postBoxes.map(postbox => {
          return {
            id: postbox._id,
            qr: postbox.qrCode,
            requestForOpen: postbox.requestForOpen,
            opened: postbox.opened,
            heater: postbox.heater,
            activationCode: postbox.activationCode,
            ownerId: postbox.owner
          }
        })
      }
    })).subscribe(transformedPostboxData => {
      this.postboxes = transformedPostboxData.postboxes;
      this.postboxesUpdated.next({postboxes: [...this.postboxes]});
    })
  }

  getPostboxUpdateListener(){
    return this.postboxesUpdated.asObservable();
  }
}
