import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';
import {
  FileItemComponent,
  IFileItemComponent,
} from '../file-item/file-item.component';

@Component({
  selector: 'app-folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss'],
})
export class FolderViewComponent implements OnInit {
  @Input() fileItems: IFileItemComponent[] = [];

  constructor(public utils: UtilsService) {}

  ngOnInit(): void {
    this.fileItems = [
      {
        fileName: 'Images',
        fileChanged: '02/13/2018',
        fileClass: this.utils.fileTypeClass('Images'),
      },
      {
        fileName: 'Scripts',
        fileChanged: '02/14/2018',
        fileClass: this.utils.fileTypeClass('Images'),
      },
      {
        fileName: 'Utils',
        fileChanged: '02/15/2018',
        fileClass: this.utils.fileTypeClass('Images'),
      },
      {
        fileName: 'Archive.zip',
        fileChanged: '02/16/2018',
        fileClass: this.utils.fileTypeClass('Archive.zip'),
      },
      {
        fileName: 'avatar1.png',
        fileChanged: '02/17/2018',
        backgroundImage: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      },
      {
        fileName: 'Main.js',
        fileChanged: '02/18/2018',
        fileClass: this.utils.fileTypeClass('Main.js'),
      },
      {
        fileName: 'Presentation.pdf',
        fileChanged: '02/19/2018',
        fileClass: this.utils.fileTypeClass('Presentation.pdf'),
      },
      {
        fileName: 'Test.mp3',
        fileChanged: '02/20/2018',
        fileClass: this.utils.fileTypeClass('Test.mp3'),
      },
      {
        fileName: 'Tutorial.avi',
        fileChanged: '02/21/2018',
        fileClass: this.utils.fileTypeClass('Tutorial.avi'),
      },
      {
        fileName: 'Checklist.doc',
        fileChanged: '02/22/2018',
        fileClass: this.utils.fileTypeClass('Checklist.doc'),
      },
    ];
  }
}
