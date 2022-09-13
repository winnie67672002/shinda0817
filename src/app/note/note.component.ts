import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  aaa=[] as string[];
  record="";


  constructor() { }

  ngOnInit(): void {
  }

  chagetext(): void{

   this.aaa.push(this.record);
  }
}
