import { CellItem } from './cell-item';
import { FruitType } from './fruit-type';

export class Fruit extends CellItem {
    constructor(
        public fruitType: FruitType,
        public frozen = false,
    ) { super('fruit'); }
}
