import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import {HttpClient} from "../../providers/http-client/http-client";
import {User} from "../../providers/user/user";
import {Dashboard} from "../../providers/dashboard";
import {DashboardItems} from "../dashboard-items/dashboard-items";

/*
  Generated class for the DashBoardHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dash-board-home',
  templateUrl: 'dash-board-home.html',
  providers : [User,HttpClient,Dashboard]
})
export class DashBoardHome {

  public currentUser : any;
  public loadingData : boolean = false;
  public loadingMessages : any = [];
  public dashBoardsCopy : any;
  public dashBoards :any;
  public selectedDashBoardId : string;
  public selectedDashBoardItemId : string;
  public dashBoardToDashBoardItem : any = {};

  public options : any = {};

  constructor(public navCtrl: NavController,public user : User,
              public toastCtrl:ToastController,public dashboard : Dashboard,
              public httpClient : HttpClient) {
    this.user.getCurrentUser().then(user=>{
      this.currentUser = user;
      this.dashBoards = this.getHardcodedDashBoards();
      this.selectedDashBoardId = this.dashBoards[0].id;
      for(let dashBoard of  this.dashBoards){
        this.dashBoardToDashBoardItem[dashBoard.id] = dashBoard.dashboardItems;
      }
      this.selectedDashBoardItemId = this.dashBoards[0].dashboardItems[0].id;
      //this.getAllDataBase();
    });
  }

  getAllDataBase(){
    this.loadingData = true;
    this.loadingMessages = [];
    this.setLoadingMessages("Loading available dashboards from server");
    this.dashboard.getAllDashBoardsFromServer(this.currentUser).then((dashBoardResponse:any)=>{
      this.loadingData = false;
      this.dashBoards = dashBoardResponse.dashboards;
      this.dashBoardsCopy = dashBoardResponse.dashboards;
    },error=>{
      this.loadingData = false;
      this.dashBoards = [];
      this.setToasterMessage("Fail to load dashboards from the server");
    });
  }

  hideAndShowVisualizationCard(dashBoardItemId){
    if(this.selectedDashBoardItemId == dashBoardItemId){
      this.selectedDashBoardItemId = "";
    }else{
      this.selectedDashBoardItemId = dashBoardItemId
    }
  }
  changeDashBoard(){
    console.log("Selected charts : " + this.selectedDashBoardId);
    this.selectedDashBoardItemId = this.dashBoardToDashBoardItem[this.selectedDashBoardId][0].id;
  }

  goToDashBoard(dashBoard){
    let params = {
      dashBordName : dashBoard.name,
      selectedDashBoard : dashBoard
    };
    this.navCtrl.push(DashboardItems,params);
  }

  getFilteredList(ev: any) {
    let val = ev.target.value;
    this.dashBoards = this.dashBoardsCopy;
    if(val && val.trim() != ''){
      this.dashBoards = this.dashBoards.filter((dashBoard:any) => {
        return (dashBoard.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
  }

  setLoadingMessages(message){
    this.loadingMessages.push(message);
  }

  setToasterMessage(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  getHardcodedDashBoards(){
    return [{"name":"ACT Indicators","id":"GUJEg2zr1An","dashboardItems":[{"id":"Ba7QwNbfdgW","type":"CHART","contentCount":1,"shape":"NORMAL","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-09-11T19:53:41.413","id":"m0y9whyfRqL","created":"2016-09-11T19:53:41.413","name":"Clients received care during the reporting period","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"Clients received care during the reporting period","hideSubtitle":false,"title":"Current number of persons on ART at the end of the quarter","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"pe","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":false},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["ou"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[],"userGroupAccesses":[],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"eLo4RXcQIi5"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[{"id":"2015Q3"},{"id":"2015Q4"},{"id":"2016Q1"},{"id":"2016Q2"}],"organisationUnits":[{"id":"m0frOspS7JY"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"RTNxbkSDvk6","type":"CHART","contentCount":1,"shape":"NORMAL","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-06-17T17:55:33.134","id":"M26JPMoFzUU","created":"2016-06-17T17:55:33.134","name":"ACT_Number of Children tested for HIV","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"ACT_Number of Children tested for HIV","hideSubtitle":false,"title":"Number of children < 15 tested for HIV ","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"pe","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":true},"user":{"id":"h70kUnJYZ2r"},"attributeDimensions":[],"translations":[],"filterDimensions":["ou"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[],"userGroupAccesses":[],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"INDICATOR","indicator":{"id":"hk8DwZuW4Ay"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"m5WIYYiOtSp"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"m0frOspS7JY"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"isZnEfco4MI","type":"CHART","contentCount":1,"shape":"NORMAL","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-06-17T17:53:49.894","id":"gHdMPVw0RDt","created":"2016-06-17T17:53:49.894","name":"ACT Children Positivity Rate","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"rangeAxisDecimals":2,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"ACT Children Positivity Rate","hideSubtitle":false,"title":"Children Positivity Rate","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"pe","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":true},"user":{"id":"h70kUnJYZ2r"},"attributeDimensions":[],"translations":[],"filterDimensions":["ou"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[],"userGroupAccesses":[],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"INDICATOR","indicator":{"id":"UbnP1Kth7oJ"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"m0frOspS7JY"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"YneiMm3oT4Z","type":"CHART","contentCount":1,"shape":"NORMAL","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-06-24T14:20:19.335","id":"DmQl1uXCgI3","created":"2016-06-24T14:20:19.335","name":"ACT Testing By Age Categories","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"rangeAxisLabel":"PROPOSIONAL","regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"ACT Testing By Age Categories","hideSubtitle":false,"title":"ACT TESTING BY AGE CATEGORIES, Last 4 Quarters","hideLegend":false,"externalAccess":true,"hideTitle":false,"series":"ou","category":"dx","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":true},"user":{"id":"h70kUnJYZ2r"},"attributeDimensions":[],"translations":[],"filterDimensions":["pe"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[],"userGroupAccesses":[],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"INDICATOR","indicator":{"id":"oM3uEsLqoWd"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"OHCgfBkoYoc"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"n9MRqkPSZyV"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"dLskLzFQ7yQ"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"YtVMnut7Foe"},{"id":"hAFRrgDK0fy"},{"id":"acZHYslyJLt"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"DsOnYVzRBQl","type":"CHART","contentCount":1,"shape":"DOUBLE_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-06-17T17:58:45.775","id":"W0TkAxMjRoh","created":"2016-06-17T17:58:45.775","name":"ACT_Children in Tanzania, Linked to care and initiated on ART","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"ACT_Children in Tanzania, Linked to care and initiated on ART","hideSubtitle":false,"title":"Children in Tanzania tested, linked to care, and initiated on ART","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"pe","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":true},"user":{"id":"h70kUnJYZ2r"},"attributeDimensions":[],"translations":[],"filterDimensions":["ou"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[],"userGroupAccesses":[],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"INDICATOR","indicator":{"id":"m5WIYYiOtSp"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"bKXAXPD3Ayi"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"XQBU2gGTALc"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"m0frOspS7JY"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"pfet7vCiLuw","type":"CHART","contentCount":1,"shape":"DOUBLE_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-10-18T17:41:05.526","id":"VceHXNA8Zz7","created":"2016-10-18T17:41:05.526","name":"Number of children current on ART","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"STACKED_COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"Number of children current on ART","hideSubtitle":false,"title":"Number of children current on ART","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"pe","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":true},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["ou"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[],"userGroupAccesses":[],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"INDICATOR","indicator":{"id":"LgS3MpwhYy5"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"RgQZdRgqOyM"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"i6jFhiJy8ie"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"m0frOspS7JY"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"y52JnnMkCZB","type":"CHART","contentCount":1,"shape":"DOUBLE_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-09-15T06:51:48.960","id":"sTltj0GtsAf","created":"2016-09-15T06:51:48.960","name":"Children in Tanzania , Linked Rate","showData":true,"publicAccess":"--------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"Children in Tanzania , Linked Rate","hideSubtitle":false,"title":"HTC linkage rate","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"pe","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":true},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["ou"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[],"userGroupAccesses":[{"access":"rw------","userGroupUid":"M9CyWGINe55","displayName":"HISPTZ Staffs","id":"M9CyWGINe55"},{"access":"r-------","userGroupUid":"Fu1StoDBBvn","displayName":"ACT users","id":"Fu1StoDBBvn"}],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"INDICATOR","indicator":{"id":"n2SwyUXckpp"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"m0frOspS7JY"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]}]},{"name":"RBF Coverage,trend and baseline","id":"te1SPd79n26","dashboardItems":[{"id":"PhVEV3aMX8R","type":"CHART","contentCount":1,"shape":"FULL_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-02-01T12:34:29.879","id":"M6PtgGYFAlg","created":"2016-02-01T12:34:29.879","name":"RBF: Coverage, and trend: Score analysis (Apr-Jun 2015)","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"RBF: Coverage, and trend: Score analysis (Apr-Jun 2015)","hideSubtitle":false,"hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"ou","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":false},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["pe"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[{"id":"vjpk1xfww5z"}],"userGroupAccesses":[{"access":"rw------","userGroupUid":"M9CyWGINe55","displayName":"HISPTZ Staffs","id":"M9CyWGINe55"}],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"y3H4nKfUeAJ"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"KaH6qHpJthu"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[{"id":"2015Q2"}],"organisationUnits":[{"id":"EO3Ps3ny0Nr"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"Yi3znCjUgyT","type":"CHART","contentCount":1,"shape":"FULL_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-02-01T12:29:16.510","id":"bpXNINteq2c","created":"2016-02-01T12:29:16.510","name":"RBF: Coverage, and trend: Score analysis (July-Sep 2015)","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"RBF: Coverage, and trend: Score analysis (July-Sep 2015)","hideSubtitle":false,"hideLegend":false,"externalAccess":true,"hideTitle":false,"series":"dx","category":"ou","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":false},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["pe"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[{"id":"vjpk1xfww5z"}],"userGroupAccesses":[{"access":"rw------","userGroupUid":"M9CyWGINe55","displayName":"HISPTZ Staffs","id":"M9CyWGINe55"}],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"y3H4nKfUeAJ"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"KaH6qHpJthu"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[{"id":"2015Q3"}],"organisationUnits":[{"id":"EO3Ps3ny0Nr"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"fmOELeVDpug","type":"REPORT_TABLE","contentCount":1,"shape":"NORMAL","interpretationCount":0,"interpretationLikeCount":0,"reportTable":{"lastUpdated":"2016-02-01T12:21:16.329","id":"LekT07blETw","created":"2016-01-29T13:01:38.288","name":"RBF: Coverage, and trend: Budget Analysis","publicAccess":"rw------","userOrganisationUnitChildren":false,"legendDisplayStyle":"FILL","hideEmptyRows":false,"parentGraphMap":{},"userOrganisationUnit":false,"rowSubTotals":false,"displayDensity":"NORMAL","completedOnly":false,"colTotals":false,"showDimensionLabels":true,"sortOrder":0,"fontSize":"NORMAL","topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"RBF: Coverage, and trend: Budget Analysis","externalAccess":true,"colSubTotals":false,"showHierarchy":false,"rowTotals":false,"cumulative":false,"digitGroupSeparator":"COMMA","regression":false,"skipRounding":false,"reportParams":{"paramGrandParentOrganisationUnit":false,"paramReportingPeriod":false,"paramOrganisationUnit":false,"paramParentOrganisationUnit":false},"relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":false},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["pe"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[{"id":"vjpk1xfww5z"}],"userGroupAccesses":[],"programIndicatorDimensions":[],"attributeValues":[],"columnDimensions":["dx"],"dataDimensionItems":[{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"bdkA6nefEhc"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"Qx8ESMkWmii"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[{"id":"2015Q3"}],"organisationUnits":[{"id":"EO3Ps3ny0Nr"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[],"rowDimensions":["ou"]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]}]},{"name":"RBF Indicators Comparison","id":"TPFf2ZYSw3g","dashboardItems":[{"id":"NRpMrBQnWB4","type":"CHART","contentCount":1,"shape":"FULL_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-02-03T06:42:04.450","id":"PFz7QbM1xxh","created":"2016-02-03T06:42:04.450","name":"RBF: Quartely July - September 2015: FAMILY PLANNING New Users on Modern Family Planning Methods","showData":true,"publicAccess":"--------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":true,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"RBF: Quartely July - September 2015: FAMILY PLANNING New Users on Modern Family Planning Methods","hideSubtitle":false,"title":"RBF: Quartely July - September 2015: FAMILY PLANNING New Users on Modern Family Planning Method","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"ou","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":false,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":false},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["pe"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[{"id":"vjpk1xfww5z"}],"userGroupAccesses":[{"access":"r-------","userGroupUid":"YAgCQaIIinQ","displayName":"RBF Managers","id":"YAgCQaIIinQ"},{"access":"rw------","userGroupUid":"M9CyWGINe55","displayName":"HISPTZ Staffs","id":"M9CyWGINe55"}],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"INDICATOR","indicator":{"id":"dtqikIYXfy2"}},{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"LM7axH2J0nU"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[{"id":"2015Q3"}],"organisationUnits":[{"id":"EO3Ps3ny0Nr"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"Drxem67OOub","type":"CHART","contentCount":1,"shape":"FULL_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-02-03T06:10:50.505","id":"wNv4kw8xies","created":"2016-02-03T06:10:50.505","name":"RBF Quarterly April - June 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":true,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"RBF Quarterly April - June 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","hideSubtitle":false,"title":"RBF Quarterly April - June 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"ou","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":true,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":false},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["pe"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[{"id":"vjpk1xfww5z"}],"userGroupAccesses":[{"access":"r-------","userGroupUid":"YAgCQaIIinQ","displayName":"RBF Managers","id":"YAgCQaIIinQ"},{"access":"rw------","userGroupUid":"M9CyWGINe55","displayName":"HISPTZ Staffs","id":"M9CyWGINe55"}],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"WAdaCligbNP"}},{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"eF88cywsOfN"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"EO3Ps3ny0Nr"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"UBcsYETjCFE","type":"CHART","contentCount":1,"shape":"FULL_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-02-03T06:10:50.505","id":"wNv4kw8xies","created":"2016-02-03T06:10:50.505","name":"RBF Quarterly April - June 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","showData":true,"publicAccess":"rw------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":true,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"RBF Quarterly April - June 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","hideSubtitle":false,"title":"RBF Quarterly April - June 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"ou","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":true,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":false},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["pe"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[{"id":"vjpk1xfww5z"}],"userGroupAccesses":[{"access":"r-------","userGroupUid":"YAgCQaIIinQ","displayName":"RBF Managers","id":"YAgCQaIIinQ"},{"access":"rw------","userGroupUid":"M9CyWGINe55","displayName":"HISPTZ Staffs","id":"M9CyWGINe55"}],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"WAdaCligbNP"}},{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"eF88cywsOfN"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"EO3Ps3ny0Nr"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]},{"id":"Jqvi7EIjodC","type":"CHART","contentCount":1,"shape":"FULL_WIDTH","interpretationCount":0,"interpretationLikeCount":0,"chart":{"lastUpdated":"2016-02-03T06:00:18.524","id":"c0ZKdVgzfFe","created":"2016-02-03T06:00:18.524","name":"RBF Quarterly July - September 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","showData":true,"publicAccess":"--------","userOrganisationUnitChildren":false,"type":"COLUMN","hideEmptyRows":true,"parentGraphMap":{},"userOrganisationUnit":false,"regressionType":"NONE","completedOnly":false,"sortOrder":0,"topLimit":0,"aggregationType":"DEFAULT","userOrganisationUnitGrandChildren":false,"displayName":"RBF Quarterly July - September 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","hideSubtitle":false,"title":"RBF Quarterly July - September 2015: ANC Number of antenatal visits, with gestation age < 12 weeks","hideLegend":false,"externalAccess":false,"hideTitle":false,"series":"dx","category":"ou","relativePeriods":{"thisYear":false,"quartersLastYear":false,"last52Weeks":false,"thisWeek":false,"lastMonth":false,"monthsThisYear":false,"last2SixMonths":false,"thisQuarter":false,"last12Months":true,"last5FinancialYears":false,"thisSixMonth":false,"lastQuarter":false,"thisFinancialYear":false,"last4Weeks":false,"last3Months":false,"thisMonth":false,"last5Years":false,"last6BiMonths":false,"lastFinancialYear":false,"last6Months":false,"quartersThisYear":false,"monthsLastYear":false,"lastWeek":false,"thisBimonth":false,"lastBimonth":false,"lastSixMonth":false,"lastYear":false,"last12Weeks":false,"last4Quarters":false},"user":{"id":"AcSrmqQIDy0"},"attributeDimensions":[],"translations":[],"filterDimensions":["pe"],"organisationUnitGroups":[],"interpretations":[],"itemOrganisationUnitGroups":[{"id":"vjpk1xfww5z"}],"userGroupAccesses":[{"access":"r-------","userGroupUid":"YAgCQaIIinQ","displayName":"RBF Managers","id":"YAgCQaIIinQ"},{"access":"rw------","userGroupUid":"M9CyWGINe55","displayName":"HISPTZ Staffs","id":"M9CyWGINe55"}],"programIndicatorDimensions":[],"attributeValues":[],"dataDimensionItems":[{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"WAdaCligbNP"}},{"dataDimensionItemType":"DATA_ELEMENT","dataElement":{"id":"eF88cywsOfN"}}],"columns":[],"organisationUnitLevels":[],"dataElementDimensions":[],"periods":[],"organisationUnits":[{"id":"EO3Ps3ny0Nr"}],"categoryDimensions":[],"dataElementGroups":[],"filters":[],"rows":[],"categoryOptionGroups":[]},"reports":[],"translations":[],"attributeValues":[],"users":[],"resources":[]}]}];
  }

}
