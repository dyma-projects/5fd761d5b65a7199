import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor() {}
  private colors = {
    ArrowUp: "red",
    ArrowDown: "blue",
    ArrowLeft: "green",
    ArrowRight: "purple",
  };
  @HostListener("window:keydown", ["$event"]) keyDown(event: KeyboardEvent) {
    this.color = this.colors[event.code];
  }
  @HostBinding("style.color") color: string;
}
