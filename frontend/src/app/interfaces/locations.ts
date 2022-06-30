
import { areaItem } from './areaOptionItem';

export interface locations{
    cityId: number,
    name: string,
    areas:areaItem[],
    createDate:Date,
    updateDate?: Date
    }