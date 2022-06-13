import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfilePic } from '../models/ProfilePic';

firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class ProfiePicService {
  storageRef = firebase.app().storage().ref();
  private url = 'https://portfolio-backend-110193.herokuapp.com';
  constructor(private http: HttpClient) {}

  async uploadPicture(name: string, img64: any) {
    try {
      const ans = await this.storageRef
        .child(`users/profile-pic/${name}`)
        .putString(img64, 'data_url');
      return await ans.ref.getDownloadURL();
    } catch (e) {
      console.log(e);
      return;
    }
  }
  getPicture(): Observable<ProfilePic> {
    return this.http.get<ProfilePic>(`${this.url}/pictures/1`);
  }
  putPicture(data: FormGroup): Observable<any> {
    return this.http.put(
      `${this.url}/upload/picture/${data.value.id}`,
      data.value
    );
  }
}
