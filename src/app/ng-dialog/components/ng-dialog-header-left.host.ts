import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {TemplatePortal, PortalHostDirective} from '@angular/material';

@Component({
    selector: 'ng-dialog-header-left-host',
    template: `
      <ng-template cdkPortalHost></ng-template>

`
})
export class NgDialogHeaderLeftHost implements OnInit {
    @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;
    @Input('content') _content: TemplatePortal;

    constructor() {

    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }


    ngAfterViewChecked() {
        if (this._portalHost && !this._portalHost.hasAttached()) {
            this._portalHost.attach(this._content);
        }
    }

}
