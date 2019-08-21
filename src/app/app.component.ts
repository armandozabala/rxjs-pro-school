import { AfterViewInit,Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of, range, interval, fromEvent, timer, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit   {
  name = 'Angular';

  observable$: Observable<any>; 

  @ViewChild('canvas',{static: false}) canvas: ElementRef;
  @ViewChild('boton',{static: false}) boton: ElementRef;
  

  constructor(){}

 ngAfterViewInit() {

      const buton1 = fromEvent(this.boton.nativeElement, 'click').subscribe( (evt:any) => {
          console.log(`${evt.x} - ${evt.y}`);
      });

      const source = fromEvent(this.canvas.nativeElement, 'mousemove').subscribe( (evt:any) => { 
          console.log(` x - ${ evt.clientX }  y - ${ evt.clientY}`)
      }); 
      //this.observable$ = range(3,10);
      /*this.observable$ = interval(400);
      const obs = this.observable$.subscribe( data => console.log(data) );

      timer(3000).subscribe( ()=> obs.unsubscribe());*/
     
  }
}
