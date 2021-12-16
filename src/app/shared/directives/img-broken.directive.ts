import { ConditionalExpr } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
 
  @HostListener("error") handleError(): void{
    const elNAtive = this.elHost.nativeElement
    console.log('Esta imagen no carga', this.elHost);
    elNAtive.src ="../../../assets/images/images.png"
  }
    
  constructor(private elHost: ElementRef) {

   }

}
