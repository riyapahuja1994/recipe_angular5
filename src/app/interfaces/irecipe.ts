export interface Irecipe {
    id:number;
    name:string;
    description:string;
    imagePath:string;
    ingredients: Iingredients[];
}
 interface Iingredients {
     IngredientName: string;
     quantity: number;
 }