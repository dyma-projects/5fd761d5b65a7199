import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor(private el: ElementRef<HTMLParagraphElement>) {}
  private colors = {
    ArrowUp: "red",
    ArrowDown: "blue",
    ArrowLeft: "green",
    ArrowRight: "purple",
  };
  @HostListener("window:keydown", ["$event"]) keyDown(event: KeyboardEvent) {
    this.el.nativeElement.style.color = this.colors[event.code];
  }
}
