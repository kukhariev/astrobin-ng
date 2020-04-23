import { Component } from "@angular/core";

declare const VERSION: string;

@Component({
  selector: "astrobin-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
  get currentYear(): number {
    return new Date().getFullYear();
  }

  get version(): string {
    let date: Date;

    try {
      date = new Date(VERSION);
    } catch (e) {
      if (e instanceof ReferenceError) {
        // VERSION will not be defined during testing.
        date = new Date();
      } else {
        throw e;
      }
    }

    return date.toUTCString();
  }
}
