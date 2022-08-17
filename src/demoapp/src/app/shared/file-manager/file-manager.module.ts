import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderViewComponent } from './folder-view/folder-view.component';
import { FileItemComponent } from './file-item/file-item.component';

@NgModule({
  declarations: [FolderViewComponent, FileItemComponent],
  imports: [CommonModule],
  exports: [FolderViewComponent, FileItemComponent],
})
export class FileManagerModule {}
