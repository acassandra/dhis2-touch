import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Observable} from 'rxjs/Rx';

/*
 Generated class for the SqlLite provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class SqlLite {

  constructor(public sqlite:SQLite) {
  }

  /**
   *
   * @returns {any}
   */
  getDataBaseStructure() {
    let  dataBaseStructure = {
      organisationUnits: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'name', type: 'TEXT'},
          {value: 'level', type: 'TEXT'},
          {value: 'path', type: 'TEXT'},
          {value: 'ancestors', type: 'LONGTEXT'},
          {value: 'programs', type: 'LONGTEXT'},
          {value: 'dataSets', type: 'LONGTEXT'},
          {value: 'parent', type: 'LONGTEXT'},
          {value: 'children', type: 'LONGTEXT'}
        ],
        fields: "",
        canBeUpdated: true,
        resourceType: "communication"
      },
      dataSets: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'name', type: 'TEXT'},
          {value: 'timelyDays', type: 'TEXT'},
          {value: 'formType', type: 'TEXT'},
          {value: 'periodType', type: 'TEXT'},
          {value: 'openFuturePeriods', type: 'TEXT'},
          {value: 'expiryDays', type: 'TEXT'},
          {value: 'dataElements', type: 'LONGTEXT'},
          {value: 'dataSetElements', type: 'LONGTEXT'},
          {value: 'organisationUnits', type: 'LONGTEXT'},
          {value: 'sections', type: 'LONGTEXT'},
          {value: 'indicators', type: 'LONGTEXT'},
          {value: 'categoryCombo', type: 'LONGTEXT'}
        ],
        fields: "",
        canBeUpdated: true,
        resourceType: "entryForm"
      },
      sections: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'name', type: 'TEXT'},
          {value: 'indicators', type: 'LONGTEXT'},
          {value: 'dataElements', type: 'LONGTEXT'}
        ],
        fields: "id,name,indicators[id,name,indicatorType[factor],denominatorDescription,numeratorDescription,numerator,denominator],dataElements[id,name,formName,attributeValues[value,attribute[name]],categoryCombo[id,name,categoryOptionCombos[id,name]],displayName,description,valueType,optionSet[name,options[name,id,code]]",
        canBeUpdated: true,
        resourceType: "entryForm"
      },
      dataElements: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'name', type: 'TEXT'},
          {value: 'displayName', type: 'TEXT'},
          {value: 'formName', type: 'TEXT'},
          {value: 'valueType', type: 'TEXT'},
          {value: 'description', type: 'LONGTEXT'},
          {value: 'attributeValues', type: 'LONGTEXT'},
          {value: 'optionSet', type: 'LONGTEXT'},
          {value: 'categoryCombo', type: 'LONGTEXT'}
        ],
        fields: "id,name,displayName,valueType,description,formName,attributeValues[value,attribute[name]],valueType,optionSet[name,options[name,id,code]],categoryCombo[id,name,categoryOptionCombos[id,name]]",
        canBeUpdated: false,
        resourceType: ""
      },
      smsCommand: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'commandName', type: 'TEXT'},
          {value: 'parserType', type: 'TEXT'},
          {value: 'separator', type: 'TEXT'},
          {value: 'smsCode', type: 'LONGTEXT'},
        ],
        fields: "",
        canBeUpdated: true,
        resourceType: "entryForm"
      },
      indicators: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'name', type: 'TEXT'},
          {value: 'denominatorDescription', type: 'TEXT'},
          {value: 'numeratorDescription', type: 'TEXT'},
          {value: 'numerator', type: 'TEXT'},
          {value: 'denominator', type: 'TEXT'},
          {value: 'indicatorType', type: 'LONGTEXT'}
        ],
        fields: "id,name,denominatorDescription,numeratorDescription,numerator,denominator,indicatorType[:all]",
        canBeUpdated: true,
        //resourceType: "report"
      },
      reports: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'name', type: 'TEXT'},
          {value: 'created', type: 'TEXT'},
          {value: 'type', type: 'TEXT'},
          {value: 'relativePeriods', type: 'LONGTEXT'},
          {value: 'reportParams', type: 'LONGTEXT'},
          {value: 'designContent', type: 'LONGTEXT'}
        ],
        fields: "id,name,created,type,relativePeriods,reportParams,designContent",
        filter: "type:eq:HTML&filter=designContent:ilike:cordova",
        canBeUpdated: true,
        resourceType: "report"
      },
      constants: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'value', type: 'TEXT'}
        ],
        fields: "id,value",
        canBeUpdated: true,
        //resourceType: "report"
      },
      dataValues: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'de', type: 'TEXT'},
          {value: 'co', type: 'TEXT'},
          {value: 'pe', type: 'TEXT'},
          {value: 'ou', type: 'TEXT'},
          {value: 'cc', type: 'TEXT'},
          {value: 'cp', type: 'TEXT'},
          {value: 'value', type: 'TEXT'},
          {value: 'period', type: 'TEXT'},
          {value: 'orgUnit', type: 'TEXT'},
          {value: 'syncStatus', type: 'TEXT'},
          {value: 'dataSetId', type: 'TEXT'}
        ],
        canBeUpdated: false
      },
      programs: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'name', type: 'TEXT'},
          {value: 'withoutRegistration', type: 'TEXT'},
          {value: 'programType', type: 'TEXT'},
          {value: 'categoryCombo', type: 'LONGTEXT'},
          {value: 'programStages', type: 'LONGTEXT'},
          {value: 'programStageSections', type: 'LONGTEXT'},
          {value: 'programIndicators', type: 'LONGTEXT'},
          {value: 'translations', type: 'LONGTEXT'},
          {value: 'attributeValues', type: 'LONGTEXT'},
          {value: 'validationCriterias', type: 'LONGTEXT'},
          {value: 'programRuleVariables', type: 'LONGTEXT'},
          {value: 'programTrackedEntityAttributes', type: 'LONGTEXT'},
          {value: 'programRules', type: 'LONGTEXT'},
          {value: 'organisationUnits', type: 'LONGTEXT'}
        ],
        fields: "id,name,withoutRegistration,programType,categoryCombo[id,name,categories[id,name,categoryOptions[name,id]]],programStages[id,name,programStageDataElements[id],programStageSections[id]],organisationUnits[id],programIndicators,translations,attributeValues,validationCriterias,programRuleVariables,programTrackedEntityAttributes,programRules",
        canBeUpdated: true,
        resourceType: "event"
      },
      programStageDataElements: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'displayInReports', type: 'TEXT'},
          {value: 'compulsory', type: 'TEXT'},
          {value: 'allowProvidedElsewhere', type: 'TEXT'},
          {value: 'allowFutureDate', type: 'TEXT'},
          {value: 'dataElement', type: 'LONGTEXT'}
        ],
        fields: "id,displayInReports,compulsory,allowProvidedElsewhere,allowFutureDate,dataElement[id,name,formName,attributeValues[value,attribute[name]],categoryCombo[id,name,categoryOptionCombos[id,name]],displayName,description,valueType,optionSet[name,options[name,id,code]]",
        canBeUpdated: true,
        resourceType: "event"
      },
      programStageSections: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'name', type: 'TEXT'},
          {value: 'sortOrder', type: 'TEXT'},
          {value: 'programIndicators', type: 'LONGTEXT'},
          {value: 'programStageDataElements', type: 'LONGTEXT'}
        ],
        fields: "id,name,programIndicators,sortOrder,programStageDataElements[id]",
        canBeUpdated: true,
        resourceType: "event"
      },
      events: {
        columns: [
          {value: 'id', type: 'TEXT'},
          {value: 'event', type: 'TEXT'},
          {value: 'program', type: 'TEXT'},
          {value: 'programName', type: 'TEXT'},
          {value: 'programStage', type: 'TEXT'},
          {value: 'orgUnit', type: 'TEXT'},
          {value: 'orgUnitName', type: 'TEXT'},
          {value: 'status', type: 'TEXT'},
          {value: 'eventDate', type: 'TEXT'},
          {value: 'completedDate', type: 'TEXT'},
          {value: 'attributeCategoryOptions', type: 'TEXT'},
          {value: 'dataValues', type: 'LONGTEXT'},
          {value: 'notes', type: 'TEXT'},
          {value: 'syncStatus', type: 'TEXT'}
        ],
        canBeUpdated: false
      }
    };
    return dataBaseStructure;
  }

  /**
   *
   * @param databaseName
   * @returns {Promise<T>}
   */
  generateTables(databaseName) {

    return new Promise( (resolve, reject)=> {
      let promises = [];
      let tableNames = Object.keys(this.getDataBaseStructure());
      tableNames.forEach((tableName:any) => {
        promises.push(this.createTable(tableName, databaseName).then(()=> {
            console.log('Generate table for ' + tableName);
          })
        );
      });

      Observable.forkJoin(promises).subscribe((response) => {
          resolve(response);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  /**
   *
   * @param tableName
   * @param databaseName
   * @returns {Promise<T>}
   */
  createTable(tableName, databaseName) {

    databaseName = databaseName + '.db';

    return new Promise( (resolve, reject)=> {
      let query = 'CREATE TABLE IF NOT EXISTS ' + tableName + ' (';
      let columns = this.getDataBaseStructure()[tableName].columns;
      columns.forEach((column:any, index:any) => {
        if (column.value == "id") {
          query += column.value + " " + column.type + ' primary key';
        } else {
          query += column.value + " " + column.type;
        }
        if ((index + 1) < columns.length) {
          query += ','
        }
      });
      query += ')';

      this.sqlite.create({name: databaseName, location: 'default'}).then((db:SQLiteObject)=> {
        db.executeSql(query, []).then(() => {
          console.log("Success create table " + tableName);
          resolve();
        }, (error) => {
          console.log("Success create table " + tableName);
          console.log("Error occurred " + JSON.stringify(error));
          reject(error);
        });
      }).catch(e => {
        reject();
        console.log(e);
      });

    });
  }

  /**
   *
   * @param tableName
   * @param fieldsValues
   * @param databaseName
   * @returns {Promise<T>}
   */
  insertDataOnTable(tableName, fieldsValues, databaseName) {

    databaseName = databaseName + '.db';
    let columns = this.getDataBaseStructure()[tableName].columns;
    let columnNames = "";
    let questionMarks = "";
    let values = [];

    columns.forEach((column:any, index:any)=> {
      let columnValue:any;
      let columnName = column.value;
      columnNames += columnName;

      if (fieldsValues[columnName]) {
        columnValue = fieldsValues[columnName];
      }

      questionMarks += "?";
      if ((index + 1) < columns.length) {
        columnNames += ',';
        questionMarks += ',';
      }
      if (column.type != "LONGTEXT") {
        if (columnValue == undefined) {
          columnValue = 0;
        }
        values.push(columnValue);
      } else {
        values.push(JSON.stringify(columnValue));
      }

    });
    let query = "INSERT OR REPLACE INTO " + tableName + " (" + columnNames + ") VALUES (" + questionMarks + ")";
    return new Promise( (resolve, reject)=> {
      this.sqlite.create({name: databaseName, location: 'default'}).then((db:SQLiteObject)=> {
        db.executeSql(query, values).then(() => {
          resolve();
        }, (error) => {
          reject(error);
        });
      }).catch(e => {
        reject();
        console.log(e);
      });
    });
  }

  /**
   *
   * @param tableName
   * @param databaseName
   * @returns {Promise<T>}
   */
  deleteAllOnTable(tableName, databaseName) {
    databaseName = databaseName + '.db';
    let query = "DELETE FROM " + tableName;

    return new Promise( (resolve, reject)=> {
      this.sqlite.create({name: databaseName, location: 'default'}).then((db:SQLiteObject)=> {
        db.executeSql(query, []).then((success) => {
          resolve();
        }, (error) => {
          reject(error);
        });
      }).catch(e => {
        reject();
        console.log(e);
      });
    });
  }

  /**
   * deleteFromTableByAttribute
   * @param tableName
   * @param attribute
   * @param attributesValue
   * @param databaseName
   * @returns {Promise<T>}
     */
  deleteFromTableByAttribute(tableName,attribute, attributesValue, databaseName) {

    databaseName = databaseName + '.db';
    let query = "DELETE FROM " + tableName + " WHERE "+attribute+" = '"+attributesValue+"'";
    return new Promise( (resolve, reject)=> {
      this.sqlite.create({name: databaseName, location: 'default'}).then((db:SQLiteObject)=> {
        db.executeSql(query, []).then((success) => {
          resolve();
        }, (error) => {
          console.log(JSON.stringify(error));
          reject(error);
        });
      }).catch(e => {
        reject();
        console.log(e);
      });
    });
  }

  /**
   *
   * @param tableName
   * @param databaseName
   * @returns {Promise<T>}
   */
  dropTable(tableName, databaseName) {
    databaseName = databaseName + '.db';
    let query = "DROP TABLE " + tableName;

    return new Promise( (resolve, reject)=> {
      this.sqlite.create({name: databaseName, location: 'default'}).then((db:SQLiteObject)=> {
        db.executeSql(query, []).then((success) => {
          resolve();
        }, (error) => {
          reject(error);
        });
      }).catch(e => {
        reject();
        console.log(e);
      });
    });
  }

  /**
   *
   * @param tableName
   * @param attribute
   * @param attributesValuesArray
   * @param databaseName
   * @returns {Promise<T>}
   */
  getDataFromTableByAttributes(tableName, attribute, attributesValuesArray, databaseName) {

    databaseName = databaseName + '.db';
    let columns = this.getDataBaseStructure()[tableName].columns;
    let query = "SELECT * FROM " + tableName + " WHERE " + attribute + " IN (";
    let inClauseValues = "";

    attributesValuesArray.forEach((attributesValue:any, index:any)=> {
      inClauseValues += "'" + attributesValue + "'";
      if ((index + 1) < attributesValuesArray.length) {
        inClauseValues += ',';
      }
    });
    query += inClauseValues;
    query += ")";
    return new Promise( (resolve, reject)=> {
      this.sqlite.create({name: databaseName, location: 'default'}).then((db:SQLiteObject)=> {
        db.executeSql(query, []).then((result) => {
          resolve(this.formatQueryReturnResult(result, columns));
        }, (error) => {
          reject(error);
        });
      }).catch(e => {
        reject();
        console.log(e);
      });
    });
  }

  /**
   *
   * @param tableName
   * @param databaseName
   * @returns {Promise<T>}
   */
  getAllDataFromTable(tableName, databaseName) {

    databaseName = databaseName + '.db';
    let columns = this.getDataBaseStructure()[tableName].columns;
    let query = "SELECT * FROM " + tableName + ";";

    return new Promise( (resolve, reject)=> {
      this.sqlite.create({name: databaseName, location: 'default'}).then((db:SQLiteObject)=> {
        db.executeSql(query, []).then((result) => {
          resolve(this.formatQueryReturnResult(result, columns));
        }, (error) => {
          reject(error);
        });
      }).catch(e => {
        reject();
        console.log(e);
      });
    });
  }


  /**
   *
   * @param result
   * @param columns
   * @returns {Array}
   */
  formatQueryReturnResult(result, columns) {
    let len = result.rows.length;
    let data = [];
    for (var i = 0; i < len; i++) {
      let row = {};
      let currentRow = result.rows.item(i);
      columns.forEach((column) => {
        var columnName = column.value;
        if (column.type != "LONGTEXT") {
          row[columnName] = currentRow[columnName]
        } else {
          row[columnName] = eval("(" + currentRow[columnName] + ")");
        }
      });
      data.push(row);
    }
    return data;
  }

}

