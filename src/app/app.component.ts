import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';
import { DeviceService } from './core/services/device.service';

@Component({
    selector: 'tv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private deviceService: DeviceService) { }

    ngOnInit(): void {
        if (environment.hybrid && this.deviceService.isAndroid) {
            document.body.classList.add('no-border');
        }
    }
}
