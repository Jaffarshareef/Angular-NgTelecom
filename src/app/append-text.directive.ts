import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppendText]'
})
export class AppendTextDirective {

  constructor(private el: ElementRef) {  }

  @Input() set addText(message: string) {
       this.el.nativeElement.innerHTML = message;
       this.el.nativeElement.style.textAlign = 'center';
}
}
