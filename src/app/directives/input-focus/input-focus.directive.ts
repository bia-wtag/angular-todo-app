import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFocus]',
})
export class InputFocusDirective implements AfterViewInit {
  @Input() autofocus = false;

  constructor(private inputElement: ElementRef<HTMLTextAreaElement>) {}

  ngAfterViewInit(): void {
    this.inputElement.nativeElement.focus();
  }
}
