import { Model } from './base.model';

export interface FaqModel extends Model {
    question: string;
    answer: string;
}
