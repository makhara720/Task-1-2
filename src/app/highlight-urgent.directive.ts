import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightUrgent]'
})
export class HighlightUrgentDirective implements OnInit {
  @Input('appHighlightUrgent') dueDate!: Date;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const dueDate = new Date(this.dueDate);
    const now = new Date();
    const timeDiff = dueDate.getTime() - now.getTime();
    const isUrgent = timeDiff > 0 && timeDiff <= 24 * 60 * 60 * 1000;

    if (isUrgent) {
      this.el.nativeElement.style.border = '5px dotted red';
      this.el.nativeElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    }
  }
}