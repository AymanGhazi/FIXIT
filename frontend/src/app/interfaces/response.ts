import { TechnicianItem } from 'src/app/interfaces/front/home-technician-item';
import { galleries } from './galleries';

export interface AlbumItem{

    error: number;
    timestamp: Date,
    content:TechnicianItem | galleries 
}