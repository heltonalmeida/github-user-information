import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public descriptionFooter: string = "CompassoUOL - 2021";
  public descriptionNavbar: string = "CompassoUOL";
  public srcImageNavbar: string = "../assets/images/logo-compasso.png";
  public widthImageNavbar: number = 30;
  public heightImageNavbar: number = 30;


}
