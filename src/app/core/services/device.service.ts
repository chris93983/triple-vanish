import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { PORTRAIT_SMALL_SCREEN_EDGE, SMALL_SCREEN_EDGE } from '../constant/breakpoints';
import { ViewMode } from '../models/view-mode';

@Injectable()
export class DeviceService {
    readonly viewModeChange = new Subject<ViewMode>();

    #previousViewMode: ViewMode = 'phone-portrait';

    get isPhoneView(): boolean {
        return globalThis.innerWidth <= SMALL_SCREEN_EDGE;
    }

    get isPortraitPhoneView(): boolean {
        return Math.min(globalThis.innerWidth, globalThis.innerHeight) < PORTRAIT_SMALL_SCREEN_EDGE;
    }

    get isMobileDevice(): boolean {
        return /Mobile/i.test(navigator.userAgent) || this.isAndroid || this.isIOS;
    }

    get isAndroid(): boolean {
        return /Android/i.test(navigator.userAgent);
    }

    get isIOS(): boolean {
        // 'Request Desktop Site' is default to 'true' on iPadOS 13 and user agent becomes same with mac Safari, we need to identify iPad device with more condition.
        return /iPad|iPhone|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    }

    get iOSVersion(): number {
        const agent = navigator.userAgent;
        const versionString = agent.substring(agent.indexOf('Version/') + 8);
        return this.isIOS ? Number(versionString.substring(0, versionString.indexOf(' '))) : Number.NaN;
    }

    get isPortraitOrientation(): boolean {
        return this.screenOrientation.startsWith('portrait');
    }

    get screenOrientation(): OrientationType {
        return screen.orientation.type;
    }

    get currentViewMode(): ViewMode {
        let viewmode: ViewMode;

        if (this.isMobileDevice) {
            viewmode = this.isPortraitOrientation ? this.isPortraitPhoneView ? 'phone-portrait' : 'desktop-portrait' : this.isPhoneView ? 'phone' : 'desktop';
        } else {
            viewmode = this.isPhoneView ? 'phone' : 'desktop';
        }

        return viewmode;
    }

    constructor() {
        globalThis.addEventListener('resize', () => {
            if (this.#previousViewMode !== this.currentViewMode) {
                this.viewModeChange.next(this.currentViewMode);
            }

            this.#previousViewMode = this.currentViewMode;
        });
    }
}
