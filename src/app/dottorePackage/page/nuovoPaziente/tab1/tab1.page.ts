import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { SharedNewPazienteService } from '../shared-new-paziente.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import {Chooser, ChooserResult} from '@ionic-native/chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { GlobalService } from 'src/app/service/global.service';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  public fileObj:ChooserResult

  constructor(public sharedService: SharedNewPazienteService,  private chooser:Chooser,public file: File,private filePath: FilePath, public global: GlobalService) {
    this.sharedService.imageBlob = null
    this.sharedService.imageName = ""
   }

  ngOnInit() {
    
  }

  
PickFile(){
  this.chooser.getFile("image/jpeg").then((value:ChooserResult)=>{
    this.fileObj = value;
    this.getImages(this.fileObj)
  },(err)=>{
    alert(JSON.stringify(err));
  })
}

getImages(fileObj:ChooserResult) {
  console.log(fileObj);
  console.log(fileObj.uri);
  
    this.filePath.resolveNativePath(fileObj.uri).then(
      (nativepath) => {
        console.log(nativepath);
        
        this.file.resolveLocalFilesystemUrl(nativepath).then((entry:any) =>{
          entry.file(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
            this.sharedService.imageBlob =new Blob([reader.result], {
              type: file.type
          });
          this.sharedService.imageName = file.name 
          };
          reader.readAsArrayBuffer(file);
          })
        })

      }, (err) => {
        alert(JSON.stringify(err));
      })
  }

}
