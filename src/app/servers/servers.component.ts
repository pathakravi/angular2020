import { Component } from "@angular/core";
@Component({
  selector: "app-servers",
  //selector : '[app-servers]',
  //selector : '.app-servers',
  templateUrl: "./servers.component.html"
})
export class ServersComponent {
  allowNewServer = false;
  constrcutor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 5000);
  }
  time: number = 20;
  calculateTiime() {
    return (this.time = 10);
  }
}
