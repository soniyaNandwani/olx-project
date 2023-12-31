export interface UserData{
    uId?:String;
    fName?:String;
    lName?:String;
    address?:String;
    city?:String;
    state?:String;
    postalCode?:number;
    contactNumber?:number;
    balance?:number;
    cart?: Cart;
    latitude?:number;
    longitude?:number;
}

export interface CartItem{
    name:String;
    pId:String;
    sellerUId:String;
    quantity:number;
    price:number;//single item price
    image?:string;
 
}
export interface Cart{
    items:CartItem[];
    total:number;
}
