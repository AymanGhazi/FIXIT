
import { mobileItem } from './mobileItem';
export interface dashboardSettings{
        accountId: number,
        name: string
        email:string
        mobile:string ,
        password:string
        isVerified: number,
        categoryId: number,
        cityId: number,
        areaId: number,
        avatarId: number,
        type:string,
        mobiles:mobileItem[]
        createDate:Date
        updateDate?:Date
        introduction:string,
        newPassword?:string,
        confirmPassword?:string
}