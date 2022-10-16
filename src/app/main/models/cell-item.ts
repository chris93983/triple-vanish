import { CellItemType } from './cell-item-type';

export class CellItem {
    get isBlocking(): boolean {
        return false;
    }

    constructor(
        public itemType: CellItemType,
        public disable = false,
    ) { }
}
