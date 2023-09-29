//class Cercle extends Forme {
  // private _rayon : number;

   // public aire() : number{
     //   return 0;  //Math.PI* ??;
   //}
//}

class Cercle implements Forme {
private static nbrCercle: number = 0;
private _rayon: number;

constructor(rayon: number){
      if (rayon <=0) {
         throw new Error ("Le rayon doit être positif");

      }
    this._rayon = rayon;
   // Incrémentation de la variable statique lors de la création d'une instance
  Cercle.nbrCercle++;
   }
      public aire(): number{
         const pi: number = Math.PI;
         return pi * this._rayon;
      }


      public perimetre(): number {
         const pi: number = Math.PI;
         return 2 * pi * this._rayon; 
      }

      // Getter pour obtenir la valeur du rayon

      get rayon(): number {
         return this._rayon;
      }

      //Setter pour définir la valeur du rayon

      set rayon (rayon: number) {
         if (rayon <=0) {
            throw new Error ("Le rayon doit être positif")
         }
         this._rayon = rayon;
      }


   

   //Methode static pour obtenir le nombre d'instances de Cercle

   public static getnumbreInstance(): number {
      return Cercle.nbrCercle;
   }
}

