import { gallary } from "./gallary";
import { Photo } from "./Photo";

export interface Member {
        id: number;
        userName: string;
        email:string
        phonenumber:string
        photoUrl: string;
        age: number;
        knownAs: string;
        created: Date;
        lastActive: Date;
        gender: string;
        introduction: string;
        city: string;
        country: string;
        mainPhoto:Photo;
        gallaries: gallary[];
    }

