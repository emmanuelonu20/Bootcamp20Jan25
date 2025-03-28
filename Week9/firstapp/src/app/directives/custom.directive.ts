import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: false
})
export class CustomDirective {

  constructor(private item: ElementRef) { 
    let dom = item.nativeElement;
    dom.style.backgroundColor = 'pink';
    dom.innerHTML += '<h1>I just got appended</h1>';
  }

}
