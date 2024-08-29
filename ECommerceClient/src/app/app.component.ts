import { Component} from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { AuthService } from './services/common/auth.service';
import { Router } from '@angular/router';
import { HttpClientService } from './services/common/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';

  constructor(public authService: AuthService, private toastrService: CustomToastrService, private router: Router, httpClientService: HttpClientService) {

    httpClientService.get({
      controller: "baskets"
    }).subscribe(data => {
      debugger;
    });



    authService.identityCheck();
  }

  signOut() {
    localStorage.removeItem("accessToken");
    this.authService.identityCheck();
    this.router.navigate([""]);
    this.toastrService.message("Logout has been closed!", "Logout has been completed", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopRight
    });
  }
}
