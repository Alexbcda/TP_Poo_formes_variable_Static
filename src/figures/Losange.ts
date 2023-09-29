class Losange implements Forme {

    private static nbrLosange: number = 0;
    private _petitediagonale: number;
    private _grandediagonale: number;
    private _cote: number;

    constructor(petitediagonale: number, grandediagonale: number, cote: number) {
        this._petitediagonale = petitediagonale;
        this._grandediagonale = grandediagonale;
        this._cote = cote;

        if (!this.estLosangeValide()) {
            throw new Error("Le losange n'est pas valide.");
        }

        Losange.nbrLosange++;
    }

    public aire(): number {
        return (this._petitediagonale * this._grandediagonale) / 2;
    }

    public perimetre(): number {
        return (this._cote * 4);
    }

    // Getter pour obtenir la valeur des diagonales
    get petitediagonale(): number {
        return this._petitediagonale;
    }

    get grandediagonale(): number {
        return this._grandediagonale;
    }

    get cote(): number {
        return this._cote;
    }

    // Setter pour définir la valeur des diagonales
    set petitediagonale(petitediagonale: number) {
        if (petitediagonale <= 0) {
            throw new Error("La longueur de la petite diagonale doit être positive.");
        }
        this._petitediagonale = petitediagonale;
    }

    set grandediagonale(grandediagonale: number) {
        if (grandediagonale <= 0) {
            throw new Error("La longueur de la grande diagonale doit être positive.");
        }
        this._grandediagonale = grandediagonale;
    }

    // Méthode pour vérifier si le losange est valide
    private estLosangeValide(): boolean {
        if (this._petitediagonale <= 0 || this._grandediagonale <= 0) {
            return false;
        }
        return true;
    }

    // Méthode statique pour obtenir le nombre d'instances de Losange
    public static getNombreInstances(): number {
        return Losange.nbrLosange;
    }
}
