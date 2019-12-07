import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Output() pageSelected = new EventEmitter<string>();
  constructor() {}

  onSelect(page: string) {
    this.pageSelected.emit(page);
  }
}
