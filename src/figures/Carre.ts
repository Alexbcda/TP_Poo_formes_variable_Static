//class Carre extends Forme {
  // private _longeurCote: number;

   //public aire() : number{
     //  return 0;//??;
   //}
//}

class Carre implements Forme {
    private static nbrCarre: number = 0; // Variable statique pour compter les instances de Carre
    
    private _cote: number; // Attribut : longueur du côté du carré

    constructor(cote: number) {
        if (cote <= 0) {
            throw new Error("La longueur du côté doit être positive.");
        }
        this._cote = cote;
        
        // Incrémentation de la variable statique lors de la création d'une instance
        Carre.nbrCarre++;
    }

    public aire(): number {
        return this._cote * this._cote; // L'aire d'un carré est le côté au carré
    }

    public perimetre(): number {
        return 4 * this._cote; // Le périmètre d'un carré est 4 fois la longueur du côté
    }

    // Getter pour obtenir la valeur du côté
    get cote(): number {
        return this._cote;
    }

    // Setter pour définir la valeur du côté
    set cote(cote: number) {
        if (cote <= 0) {
            throw new Error("La longueur du côté doit être positive.");
        }
        this._cote = cote;
    }

    // Méthode statique pour obtenir le nombre d'instances de Carre
    public static getNombreInstances(): number {
        return Carre.nbrCarre;
    }
}
