import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ALL_FRUIT_TYPES } from '../../constant/all-fruits';
import { CellItem } from '../../models/cell-item';
import { FruitType } from '../../models/fruit-type';

@Component({
    selector: 'tv-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    @ViewChild('progressElement', { static: true }) progressElement: ElementRef<HTMLElement> | null = null;
    cellItems: CellItem[] = [];

    #pickedFruitTypes: FruitType[] = [];

    get progress(): number {
        const progress = this.progressElement?.nativeElement.style.getPropertyValue('--progress') ?? '0';
        const progressNumber = Number(progress.replace('%', '')) / 100;
        console.log('get progress', progress, progressNumber);
        return progressNumber;
    }
    set progress(value) {
        this.progressElement?.nativeElement.style.setProperty('--progress', `${value * 100}%`);
    }

    ngOnInit(): void {
        this.pickFruitTypes();
        console.log('oninit', this.progress, this.progressElement, this.progressElement?.nativeElement.style.getPropertyValue('--progress'));
    }

    private pickFruitTypes(): void {
        this.#pickedFruitTypes = [];
        const types = [...ALL_FRUIT_TYPES];

        for (let i = 0; i < 4; i++) {
            const index = (Math.random() * types.length) >> 0;
            this.#pickedFruitTypes.push(types[index]);
            types.splice(index, 1);
        }
    }
}
