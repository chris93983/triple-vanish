import { CellItemType } from './cell-item-type';

export abstract class CellItem {
    get isBlocking(): boolean {
        return false;
    }

    constructor(
        public itemType: CellItemType,
    ) { }
}
