import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { SampleData } from '../contents/SampleData';
import { Constants } from '../models/Constants';
// import { AuthenticationService } from './authentication.service';
// import { saveAs } from 'file-saver';
import { String } from 'typescript-string-operations';
import { Func } from '../classes/Funcs';
import { FormGroup } from '@angular/forms';
// import * as Enumerable from 'linq';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private httpClient: HttpClient) {}

  formatUrl(url: string, ...args: any[]) {
    return args.length > 0 ? String.Format(url, ...args) : url;
  }

  request(url: string, method = Constants.GET, options?: any, ...args: any[]) {
    url = this.formatUrl(url, ...args);
    let payLoad = {
      params: Constants.isBody(method) ? null : options,
      body: Constants.isBody(method) ? options : null,
    };

    return this.httpClient.request(method, url, payLoad).pipe(
      map((res) => res),
      map((body) => body),
      catchError((body) => of(body))
    );
  }

  getRequest(url: string, params?: any, ...args: any[]) {
    url = this.formatUrl(url, ...args);
    return this.httpClient.get(url, { params: params }).pipe(
      map((res) => res),
      map((body) => body),
      catchError((body) => of(body))
    );
  }

  postRequest(url: string, body: any, ...args: any[]) {
    url = this.formatUrl(url, ...args);
    return this.httpClient.post(url, body).pipe(
      map((res) => res),
      map((body) => body),
      catchError((body) => of(body))
    );
  }
  putRequest(url: string, body: any, ...args: any[]) {
    url = this.formatUrl(url, ...args);
    return this.httpClient.put(url, body).pipe(
      map((res) => res),
      map((body) => body),
      catchError((body) => of(body))
    );
  }
  deleteRequest(url: string, params?: any, ...args: any[]) {
    url = this.formatUrl(url, ...args);
    return this.httpClient.delete(url, params).pipe(
      map((res) => res),
      map((body) => body),
      catchError((body) => of(body))
    );
  }

  requestUnhandled(
    url: string,
    method = Constants.GET,
    options?: any,
    func?: Func,
    ...args: any[]
  ) {
    url = this.formatUrl(url, ...args);
    let payLoad = {
      params: Constants.isBody(method) ? null : options,
      body: Constants.isBody(method) ? options : null,
    };

    return this.httpClient.request(method, url, payLoad).pipe(
      map((res) => res),
      map((body) => body),
      finalize(() => func && func())
    );
  }

  postRequestUnHandled(url: string, body: any, func?: Func, ...args: any[]) {
    url = this.formatUrl(url, ...args);
    return this.httpClient.post(url, body).pipe(
      map((res) => res),
      map((body) => body),
      finalize(() => func && func())
    );
  }
  putRequestUnHandled(url: string, body: any, func?: Func, ...args: any[]) {
    url = this.formatUrl(url, ...args);
    return this.httpClient.put(url, body).pipe(
      map((res) => res),
      map((body) => body),
      finalize(() => func && func())
    );
  }
  deleteRequestUnHandled(
    url: string,
    params?: any,
    func?: Func,
    ...args: any[]
  ) {
    url = this.formatUrl(url, ...args);
    return this.httpClient.delete(url, { params: params }).pipe(
      map((res) => res),
      map((body) => body),
      finalize(() => func && func())
    );
  }

  getRequestUnhandled(url: string, params?: any, func?: Func, ...args: any[]) {
    url = this.formatUrl(url, ...args);
    return this.httpClient.get(url, { params: params }).pipe(
      map((res) => res),
      map((body) => body),
      finalize(() => func && func())
    );
  }

  dateFormatDDMMYYYYHHSS(date: Date) {
    var dateStr =
      ('00' + date.getDate()).slice(-2) +
      '/' +
      ('00' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      date.getFullYear() +
      ' ' +
      ('00' + date.getHours()).slice(-2) +
      ':' +
      ('00' + date.getMinutes()).slice(-2) +
      ':' +
      ('00' + date.getSeconds()).slice(-2);
    return dateStr;
  }
  dateFormatMMDDYYYY(date: Date) {
    var dateStr =
      ('00' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      ('00' + date.getDate()).slice(-2) +
      '/' +
      date.getFullYear();
    return dateStr;
  }

  momentDate(date: Date) {
    if (date) {
      return new Date(date).toISOString().slice(0, 10);
    }
    return null;
  }
  getProfileUrl(profilePic: string) {
    return `${environment.serverOrigin}${profilePic}`;
    //return `${environment.serverOrigin}${profilePic}/?access_token=${this.authService.tokenDetails.token}`
  }

  chunk(arr: any, chunkSize: any) {
    if (chunkSize <= 0) throw 'Invalid chunk size';
    var R = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
      R.push(arr.slice(i, i + chunkSize));
    return R;
  }
  countedArray(numbers: any) {
    return Array(numbers)
      .fill(0)
      .map((x, i) => i);
  }

  // downloadWithResponseFileName(
  //   url: string,
  //   postData?: any,
  //   params?: any
  // ): Observable<HttpResponse<Blob>> {
  //   if (postData) {
  //     return this.httpClient
  //       .post(url, postData, { responseType: 'blob', observe: 'response' })
  //       .pipe(
  //         map((result: HttpResponse<Blob>) => {
  //           const contentDisposition = result.headers.get(
  //             'content-disposition'
  //           );
  //           let filename: any =
  //             this.getFilenameFromContentDisposition(contentDisposition);
  //           filename = filename.replaceAll('"', '');
  //           saveAs(result.body, filename);
  //           return result;
  //         })
  //       );
  //   }

  //   return this.httpClient
  //     .get(url, { responseType: 'blob', observe: 'response', params: params })
  //     .pipe(
  //       map((result: HttpResponse<Blob>) => {
  //         const contentDisposition = result.headers.get('content-disposition');
  //         let filename: any =
  //           this.getFilenameFromContentDisposition(contentDisposition);
  //         filename = filename.replaceAll('"', '');
  //         saveAs(result.body, filename);
  //         return result;
  //       })
  //     );
  // }

  // private getFilenameFromContentDisposition(
  //   contentDisposition: string
  // ): string {
  //   const regex = /filename=(?<filename>[^,;]+);/g;
  //   const match = regex.exec(contentDisposition);
  //   const filename = match.groups.filename;
  //   return filename;
  // }

  // getBetween(input: string, firstvariable: string, secondvariable: string) {
  //   let matchList: any[] = [];
  //   var matches = input.match(
  //     new RegExp(firstvariable + '(.*?)' + secondvariable, 'g')
  //   );
  //   if (matches) {
  //     matches.forEach((val) => {
  //       let match = val.match(
  //         new RegExp(firstvariable + '(.*?)' + secondvariable)
  //       );
  //       matchList.push(match[1]);
  //     });
  //   }
  //   return matchList;
  // }

  setClassValuesFromInterfaceObj(interfaceObj: any, classObj: any) {
    if (interfaceObj) {
      Object.keys(interfaceObj).forEach((key) => {
        if (interfaceObj[key] != null) classObj[key] = interfaceObj[key];
      });
    }
  }
  formFieldsTouch(form: FormGroup) {
    if (!form) return;
    for (let i in form.controls) {
      form.controls[i].markAsTouched();
    }
    // this.sleep(1000);
  }
  // equalAnyValueFromArray(value: any, ...comparingValues: any[]) {
  //   return Enumerable.from(comparingValues).any((item) => value == item);
  // }
  trimmedValue(input: any) {
    return typeof input == 'string' ? input.trim() : input;
  }

  // setTheme(themes: Themes) {
  //   let root: any = document.querySelector(':root');

  //   Object.keys(themes).forEach((key: any) => {
  //     if (themes[key]) {
  //       let varName = `--${key.replace(/_/g, '-')}`;
  //       root.style.setProperty(varName, themes[key]);
  //     }
  //   });
  // }
}

export interface Themes {
  primary_color?: string;
  primary_color_rgb?: string;
}
