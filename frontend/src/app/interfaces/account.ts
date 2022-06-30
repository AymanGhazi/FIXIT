import { mobileItem } from "./mobileItem"

export interface account  {
   accountId: number,
        userName: string,
        mobile: string,
        password:string,
        isVerified: number,
        categoryId: number,
        cityI: number,
        areaId: number,
        avatarId: number,
        type: string,
        mobiles:mobileItem[]
        createDate:Date,
        updateDate: Date
    }

