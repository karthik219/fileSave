import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';
@Component({
  selector: 'app-fupload',
  templateUrl: './fupload.component.html',
  styleUrls: ['./fupload.component.css']
})
export class FuploadComponent{
  selectFile:FileList=null;
  fileupload:File;
    saveFile(event){
      this.selectFile=event.target.files;
      console.log(this.selectFile)
    }

    onSave(){
      this.fileupload = this.selectFile.item(0);
      var blob = new Blob([this.fileupload], {type: 'text/plan'});
      saveAs(blob, "Sample.txt");
    }
}