import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { environment } from '../environments/environment';
import { PRELOAD_IMAGES } from './core/constant/preload-images';
import { DeviceService } from './core/services/device.service';

@Component({
    selector: 'tv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('progress') progress: ElementRef<HTMLElement> | undefined;
    loading = false;

    constructor(private deviceService: DeviceService, private router: Router) { }

    async ngOnInit(): Promise<void> {
        if (environment.hybrid && this.deviceService.isAndroid) {
            document.body.classList.add('no-border');
        }

        this.router.events.subscribe(async (event) => {
            if (event instanceof NavigationEnd) {
                await this.loadMaterialImages();
            }
        });
    }

    private async loadMaterialImages(): Promise<void> {
        const imageUrls = PRELOAD_IMAGES[this.router.url];

        if (imageUrls) {
            const entries = Object.entries(imageUrls);

            if (entries?.length) {
                this.loading = true;
                const promises: Promise<any>[] = [];
                const progressPerEntry = 1 / entries.length;
                let completedItemCount = 0;

                for (const entry of entries) {
                    promises.push(new Promise(async (resolve) => {
                        if (document.body.style.getPropertyValue(entry[0])) {
                            completedItemCount++;
                            this.updateLoadingProgress(completedItemCount * progressPerEntry);
                            resolve(null);
                        } else {
                            resolve(fetch(`/assets/images/${entry[1]}`).then(response => response.blob()).then(blob => {
                                const url = URL.createObjectURL(blob);
                                document.body.style.setProperty(entry[0], `url('${url}')`);
                                completedItemCount++;
                                this.updateLoadingProgress(completedItemCount * progressPerEntry);
                            }));
                        }
                    }));
                }

                await Promise.all(promises);
                await new Promise(resolve => setTimeout(resolve, 200));
                this.loading = false;
                this.updateLoadingProgress();
            }
        }
    }

    private updateLoadingProgress(percentage = 0) {
        this.progress?.nativeElement.style.setProperty('--progress', `${percentage * 100}%`);
    }
}
