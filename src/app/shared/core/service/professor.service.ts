import { Injectable } from "@angular/core";
import { ClasseENUM } from "../enum/classe.enum";
import { SubClasseENUM } from "../enum/sub-classe.enum";
import { Professor } from "../model/professor.model";

@Injectable({ providedIn: 'root' })
export class ProfessorService {
    constructor() {}

    
    create(professor: Professor): Professor {
        console.log('professor criado');
        return new Professor();
    }

    findAll(): Professor[] {
        let ps = new Array();
        ps.push(new Professor(1, 'magin', ClasseENUM.CLERIGO, SubClasseENUM.TECNOMAGO, 123, 'muito bom'));
        ps.push(new Professor(2, 'bardin', ClasseENUM.BARDO, SubClasseENUM.GUERREIROARCANO, 1239, 'muito bom'));
        ps.push(new Professor(3, 'obscuro', ClasseENUM.ARCANISTA, SubClasseENUM.TECNOMAGO, 153, 'muito bom'));
        ps.push(new Professor(4, 'elfin', ClasseENUM.GUERREIRO, SubClasseENUM.BARDOENTUSIASTA, 113, 'muito bom'));
        return ps;
    }
}