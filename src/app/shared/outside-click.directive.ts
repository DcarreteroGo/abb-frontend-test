import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[outsideClick]'
})
export class OutsideClickDirective {
  @Input() element: any = '';
  @Input() showing: boolean = false;
  @Output() clickOutside: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: any): void {
    const isInsideClick = this.el.nativeElement.contains(target);
    const isTargetElement = this.element && target.matches(this.element);

    if ((isInsideClick && this.showing) || (!isInsideClick && !isTargetElement)) {
      this.renderer.removeClass(this.el.nativeElement, 'custom-select--expanded');
      this.clickOutside.emit(false);
    } else {
      this.clickOutside.emit(true);
    }
  }
}
