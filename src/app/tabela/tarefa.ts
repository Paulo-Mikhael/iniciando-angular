export class Tarefa{
    constructor(
        public id: number,
        public nome: string,
        public descricao: string,
        public quantidadeEstoque: number,
        public quantidadeMinima: number,
    ) {}
}