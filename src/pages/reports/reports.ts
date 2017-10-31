import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {AppProvider} from "../../providers/app/app";
import {ReportParameterSelectionPage} from "../report-parameter-selection/report-parameter-selection";
import {ReportViewPage} from "../report-view/report-view";
import {StandardReportProvider} from "../../providers/standard-report/standard-report";
import {SqlLiteProvider} from "../../providers/sql-lite/sql-lite";

/**
 * Generated class for the ReportsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage implements OnInit{

  public loadingData : boolean = false;
  public loadingMessages : any = [];
  public currentUser : any;
  public reportList : any;
  public reportListCopy : any;
  icons: any= {};
  hideRefresher: boolean = true;
  displayMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider, public appProvider: AppProvider,
              public standardReportProvider: StandardReportProvider,
              private sqLite: SqlLiteProvider) {
  }

  ngOnInit(){
    this.icons.reports = "assets/reports/reports.png";
    this.loadingMessages = [];
    this.loadingData = true;
    this.reportList = [];
    this.user.getCurrentUser().then((user:any)=>{
      this.currentUser = user;
      this.loadReportsList(user);
    });
  }

  loadReportsList(user) {
    this.setLoadingMessages('Loading reports');
    this.standardReportProvider.getReportList(user).then((reportList: any) => {
      this.reportList = reportList;
      this.reportListCopy = reportList;
      this.loadingData = false;
      this.hideRefresher = true;
    }, error => {
      this.appProvider.setNormalNotification('Fail to load reports');
      this.loadingData = false;
      this.hideRefresher = true;
    });
  }

  setLoadingMessages(message){
    this.loadingMessages.push(message);
  }

  selectReport(report){
    let parameter = {
      id : report.id,name : report.name, reportParams:report.reportParams, relativePeriods:report.relativePeriods
    };

    if(this.standardReportProvider.hasReportRequireParameterSelection(report.reportParams)){
      this.navCtrl.push('ReportParameterSelectionPage',parameter);
    }else{
      this.navCtrl.push('ReportViewPage',parameter);
    }
  }

  getFilteredList(ev: any) {
    let val = ev.target.value;
    this.reportList = this.reportListCopy;
    if(val && val.trim() != ''){
      this.reportList = this.reportList.filter((report:any) => {
        return (report.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  doRefresh(refresher) {
    refresher.complete();
    this.displayMessage = "Checking for available reports update";
    this.loadingData = true;
    this.hideRefresher = false;
    let resource = 'reports';
    this.standardReportProvider.downloadReportsFromServer(this.currentUser).then((response:any)=> {
      this.displayMessage = "Downloading reports from server.";
    this.sqLite.dropTable(resource, this.currentUser.currentDatabase).then(()=>{
      this.sqLite.createTable(resource,this.currentUser.currentDatabase).then(()=>{
        this.displayMessage = "Checking reports from server";
          this.standardReportProvider.saveReportsFromServer( response[resource], this.currentUser).then(() => {
            this.displayMessage = "Saving reports to application";
            this.loadReportsList(this.currentUser);

      }, error=>{this.loadingData = true;
          this.appProvider.setNormalNotification("Process failed to download Reports from server")});
    },error=>{this.loadingData = true;
          this.appProvider.setNormalNotification("Failed to update application database")});
        }, error => {this.loadingData = true;
          this.appProvider.setNormalNotification("Failed to update application database")});
      }, error => {this.loadingData = true;
          this.appProvider.setNormalNotification("Failed to Save updated reports to Database")});


  }

}

