import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Snapshot {
  timestamp: string;
  label: string;
  image_data: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  snapshots: Snapshot[] = [];

  constructor(public http: HttpClient) {}

  ionViewWillEnter() {
    this.fetchSnapshots();
  }

  fetchSnapshots() {
    this.http.get<Snapshot[]>('http://192.168.96.145:5000/snapshots').subscribe(
      (snapshots) => {
        this.snapshots = snapshots;
      },
      (error) => {
        console.error('Error fetching snapshots:', error);
      }
    );
  }

  getImageUrlFromBase64(base64: string): string {
    return 'data:image/jpeg;base64,${base64}';
  }


}