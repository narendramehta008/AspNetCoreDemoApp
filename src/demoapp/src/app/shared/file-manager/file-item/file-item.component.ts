import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss'],
})
export class FileItemComponent implements OnInit, IFileItemComponent {
  @Input() fileName = '';
  @Input() fileChanged = '';
  //https://bootdey.com/img/Content/avatar/avatar1.png
  @Input() backgroundImage?: string | undefined;
  @Input() extension?: string | undefined;

  fileClass = 'file-item-icon text-secondary';

  constructor() {}

  ngOnInit(): void {
    debugger;
    const fileClass = 'file-item-icon text-secondary';
    if (!this.fileName.includes('.')) {
      this.fileClass = fileClass + ' far fa-folder';
      return;
    }

    // let extension = this.fileName.slice(this.fileName.lastIndexOf('.');
    let extension = this.fileName.slice(this.fileName.lastIndexOf('.'));
    if (extension == 'html') {
      this.fileClass = fileClass + ' fab fa-html5';
    } else if ((extension = 'zip' || extension == 'rar')) {
      this.fileClass = fileClass + ' far fa-file-archive';
    } else if ((extension = 'doc')) {
      this.fileClass = fileClass + ' far fa-file-word';
    } else if ((extension = 'js')) {
      this.fileClass = fileClass + ' fab fa-js';
    } else if ((extension = 'txt')) {
      this.fileClass = fileClass + ' far fa-file-alt';
    } else if ((extension = 'css')) {
      this.fileClass = fileClass + ' fab fa-css';
    } else {
      this.fileClass = fileClass + ' far fa-file';
    }
  }
}

export interface IFileItemComponent {
  fileName: string;
  fileChanged: string;
  backgroundImage?: string | undefined;
  extension?: string | undefined;
  fileClass?: string | undefined;
}
