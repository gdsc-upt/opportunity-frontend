import { Model } from './base.model';

export interface MenuModel extends Model {
    name: string;
    type: string;
    link: string;
    children: MenuModel[];
}
