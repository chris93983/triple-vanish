import { CellItem } from './cell-item';

export class Slab extends CellItem {
    override get isBlocking(): boolean {
        return true;
    }
}
