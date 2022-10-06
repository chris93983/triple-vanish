import { CellItem } from './cell-item';
import { FruitType } from './fruit-type';

export class Fruit extends CellItem {
    override get isBlocking(): boolean {
        return this.frozen;
    }

    constructor(
        itemType: FruitType,
        public frozen = false,
    ) { super(itemType); }
}
