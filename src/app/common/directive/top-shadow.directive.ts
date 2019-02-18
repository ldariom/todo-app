import { Directive, ElementRef, Renderer, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
    selector: '[appTopShadow]'
})
export class TopShadowDirective implements OnChanges {
  @Input() public lengthList: number;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnChanges(changes: SimpleChanges) {
      this.setShadow(this.lengthList);
    }

    setShadow (length: number) {

      let rtn = '';

      for (let id = 0; id < length; id++) {

        const a = 8 * id + 1;
        const b =  id;
        const c = -3 * id;
        const d = id === 0 ? 8 : 8 * id;
        const e = id === 0 ? -3 : -3 * id;

        rtn += '0 ' + a + 'px ' + b + 'px ' + c + 'px rgba(0, 0, 0, 0.2), 0 ' + d + 'px 0 ' + e + 'px #f6f6f6' +
        (id === (length - 1 ) ? '' : ',');
      }

      this.renderer.setElementStyle(this.el.nativeElement, 'boxShadow', rtn);
    }

}
