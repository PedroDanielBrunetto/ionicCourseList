import { Component } from '@angular/core';
import { CursoService, Curso } from '../../services/curso.service';

@Component({
    selector: 'app-cadastro-curso',
    templateUrl: './cadastro-curso.page.html',
    styleUrls: ['./cadastro-curso.page.scss'],
})
export class CadastroCursoPage {

    nome: string = '';
    inicio: string = new Date().toISOString();
    duracao: string = '';
    valorMensal: number | null = 0;

    cursos: Curso[] = [];
    constructor(private cursoService: CursoService) { }

    onAddCurso() {
        this.cursoService.addCurso({
            nome: this.nome,
            inicio: new Date(this.inicio),
            duracao: this.duracao,
            valorMensal: this.valorMensal!
        });
        this.cursos = this.cursoService.getCursos();
        this.nome = '';
        this.inicio = new Date().toISOString();
        this.duracao = '';
        this.valorMensal = 0;
    }
}
