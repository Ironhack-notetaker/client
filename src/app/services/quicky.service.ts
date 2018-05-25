import { Injectable } from '@angular/core';


@Injectable()


export class DataService {

  private data: Storage;

  setData(data: Storage) {
    this.data = data;
  }

  getData() {
    document.getElementById('heading').innerHTML = localStorage['title'] || 'Title';
    document.getElementById('content').innerHTML = localStorage['text'] || 'Content';

    setInterval(() => {
        localStorage['title'] = document.getElementById('heading').innerHTML;
        localStorage['text'] = document.getElementById('content').innerHTML;
    }, 1000);
    this.data = localStorage;
    return localStorage;
  }

  hasData() {
    this.data = this.getData();
    return this.data;
  }


}
