import { Injectable } from '@angular/core';

export interface Curso {
  nome: string;
  inicio: Date;
  duracao: string;
  valorMensal: number;
}


@Injectable({
    providedIn: 'root'
})
export class CursoService {

    private cursos: Curso[] = [];

    constructor() { }

    addCurso(curso: Curso) {
        console.log('Curso adicionado:', curso);
        this.cursos.push(curso);
    }

    getCursos() {
        return [...this.cursos];
    }
}
