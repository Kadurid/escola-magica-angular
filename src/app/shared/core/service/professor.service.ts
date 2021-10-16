import { Injectable } from "@angular/core";
import { Professor } from "../model/professor.model";

@Injectable({ providedIn: 'root' })
export class ProfessorService {
    constructor() {}

    
    create(professor: Professor): Professor {
        console.log('professor criado');
        return new Professor();
    }

    findAll(): Professor[] {
        console.log('carregando professores');
        return new Array();
    }
}