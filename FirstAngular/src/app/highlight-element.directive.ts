import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
  standalone: true
})
export class HighlightElementDirective implements OnInit{
  @HostBinding('style.backgroundColor') bgColor?: string;
  @HostBinding('style.color') textColor = 'gray';
  @HostBinding('style.borderRadius') borRad = '10px';

  
@HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'red';
  }

  constructor() { }

  ngOnInit(): void {
    this.bgColor = 'red'
    this.textColor = 'white'
  }
}
