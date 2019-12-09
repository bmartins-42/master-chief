import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') toggle: boolean = false;

  @HostListener('click') toggleOpen() {
    this.toggle = !this.toggle;
  }
}
