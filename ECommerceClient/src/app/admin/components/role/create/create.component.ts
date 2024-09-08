import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { RoleService } from '../../../../services/common/models/role.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spiner: NgxSpinnerService,
    private roleService: RoleService,
    private alertify: AlertifyService) {
    super(spiner)
  }

  ngOnInit(): void {
  }

  @Output() createdRole: EventEmitter<string> = new EventEmitter();

  create(name: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallAtom);


    this.roleService.create(name.value, () => {
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("User was successfully added to the role.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopLeft
      });
      this.createdRole.emit(name.value);
    }, errorMessage => {
      this.alertify.message(errorMessage,
        {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopLeft
        });
    });
  }
}
