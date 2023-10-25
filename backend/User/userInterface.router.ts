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
}

export interface CartItem{
    name:String;
    pId:String;
    quantity:number;
    price:number;//single item price

}
export interface Cart{
    items:CartItem[];
    total:number;
}
