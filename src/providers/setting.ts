import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the Setting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Setting {

  constructor(public storage : Storage) {

  }

  setSynchronization(time,timeType){
    return  new Promise((resolve,reject)=>{
      let synchronizationSetting = JSON.stringify({time:time,timeType:timeType});
      this.storage.set('synchronizationSetting', synchronizationSetting).then(() => {
        resolve();
      },error=>{
        reject();
      });
    });
  }

   setDataEntrySetting(dataEntrySetting){
    return  new Promise((resolve,reject)=>{
      dataEntrySetting= JSON.stringify(dataEntrySetting);
      this.storage.set('dataEntrySetting', dataEntrySetting).then(() => {
        resolve();
      },error=>{
        reject();
      });
    });
  }

  getSynchronization(){
    return  new Promise((resolve,reject)=>{
      this.storage.get('synchronizationSetting').then(synchronizationSetting=>{
        synchronizationSetting = JSON.parse(synchronizationSetting);
        resolve(synchronizationSetting);
      },err=>{
        reject();
      })
    });
  }

  getDataEntrySetting(){
    return  new Promise((resolve,reject)=>{
      this.storage.get('dataEntrySetting').then(dataEntrySetting=>{
        dataEntrySetting = JSON.parse(dataEntrySetting);
        resolve(dataEntrySetting);
      },err=>{
        reject();
      })
    });
  }

}
