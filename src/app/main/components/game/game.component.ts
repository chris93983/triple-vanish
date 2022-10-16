import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ALL_FRUIT_TYPES, ALL_TOOL_TYPES } from '../../constant/all-cell-items';
import { CellPosition } from '../../models/cell';
import { CellItem } from '../../models/cell-item';
import { CellItemType } from '../../models/cell-item-type';

const [cellColumns, cellRows, disabledCornerCells] = [8, 7, 2];
const cellCount = cellColumns * cellRows;
const disabledCellPotisions: Array<CellPosition> = [];

for (let x = 0; x < disabledCornerCells; x++) {
    for (let y = 0; y < disabledCornerCells - x; y++) {
        disabledCellPotisions.push({ x, y });
        disabledCellPotisions.push({ x: cellColumns - 1 - x, y });
        disabledCellPotisions.push({ x, y: cellRows - 1 - y });
        disabledCellPotisions.push({ x: cellColumns - 1 - x, y: cellRows - 1 - y });
    }
}

@Component({
    selector: 'tv-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    @ViewChild('progressElement', { static: true }) progressElement: ElementRef<HTMLElement> | null = null;
    cellItems: CellItem[] = [];

    #hasFrozenFruit = false;
    #pickedItemTypes: CellItemType[] = [];

    get progress(): number {
        const progress = this.progressElement?.nativeElement.style.getPropertyValue('--progress') ?? '0';
        const progressNumber = Number(progress.replace('%', '')) / 100;
        return progressNumber;
    }
    set progress(value) {
        this.progressElement?.nativeElement.style.setProperty('--progress', `${value * 100}%`);
    }

    ngOnInit(): void {
        this.insertFruits();
    }

    private insertFruits(): void {
        this.pickItemTypes();
        console.log('picked item types', this.#pickedItemTypes);

        for (let i = 0; i < cellCount; i++) {
            const [x, y] = [i % cellColumns, i / cellColumns >> 0];
            const type = this.#pickedItemTypes[this.#pickedItemTypes.length * Math.random() >> 0];
            const disable = disabledCellPotisions.some(position => position.x === x && position.y === y);
            const cell = new CellItem(type, disable);
            this.cellItems.push(cell);
        }
    }

    private pickItemTypes(): void {
        this.#pickedItemTypes = [];
        this.#hasFrozenFruit = Math.random() > 0.5;
        const [fruitTypes, toolTypes] = [Array.from(ALL_FRUIT_TYPES), Array.from(ALL_TOOL_TYPES)];

        if (this.#hasFrozenFruit) {
            toolTypes.splice(toolTypes.indexOf('slab'), 1);
        }

        for (let i = 0; i < 4; i++) {
            const types = i < 3 ? fruitTypes : toolTypes;
            const index = (Math.random() * types.length) >> 0;
            this.#pickedItemTypes.push(types[index]);
            types.splice(index, 1);
        }
    }
}
