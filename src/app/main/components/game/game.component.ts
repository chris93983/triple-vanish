import { Component, OnInit } from '@angular/core';

import { ALL_FRUIT_TYPES } from '../../constant/all-fruits';
import { CellItem } from '../../models/cell-item';
import { FruitType } from '../../models/fruit-type';

@Component({
    selector: 'tv-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    cellItems: CellItem[] = [];

    #pickedFruitTypes: FruitType[] = [];

    ngOnInit(): void {
        this.pickFruitTypes();
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
