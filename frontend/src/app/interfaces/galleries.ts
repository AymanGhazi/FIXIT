
import { Photo } from './photos';

export interface galleries{
    photos:Photo[]
    albumId:number
    accountId:number
    title:string
    createDate:Date
    updateDate?:Date
}