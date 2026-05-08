type Biblioteca = {
    nome: string;
    endereco: string;
    books: Book[];
    users: User[];
    loans: Loan[];
};

type Book = {
    titulo: string;
    autor: string;
    ano: number;
    disponivel: boolean;
};

type User = {
    nome: string;
    sobrenome: string;
    idade: number;
    email: string;
    senha: string;
};

type Loan = {
    dataEmprestimo: Date;
    dataDevolucao: Date;
    usuario: User;
    livro: Book;
};

const biblioteca: Biblioteca = {
    nome: 'Biblioteca Central',
    endereco: 'Rua Principal, 123',
    books: [],
    users: [],
    loans: [],
};

const book1: Book = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ano: 1899,
    disponivel: true,
};

const book2: Book = {
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    ano: 1988,
    disponivel: true,
};

const user1: User = {
    nome: 'João',
    sobrenome: 'Damasio',
    idade: 18,
    email: 'joao@email.com',
    senha: '123456',
};

biblioteca.books.push(book1, book2);
biblioteca.users.push(user1);

const loan1: Loan = {
    dataEmprestimo: new Date('2026-05-08'),
    dataDevolucao: new Date('2026-05-15'),
    usuario: user1,
    livro: book2,
};

function emprestarLivro(loan: Loan): void {
    if (!loan.livro.disponivel) {
        console.log(`"${loan.livro.titulo}" não está disponível.`);
        return;
    }

    loan.livro.disponivel = false;

    console.log(
        `"${loan.livro.titulo}" foi emprestado para ${loan.usuario.nome} ${loan.usuario.sobrenome}.`
    );
}

function devolverLivro(loan: Loan): void {
    if (loan.livro.disponivel) {
        console.log(`"${loan.livro.titulo}" já foi devolvido.`);
        return;
    }

    loan.livro.disponivel = true;

    console.log(
        `"${loan.livro.titulo}" foi devolvido por ${loan.usuario.nome} ${loan.usuario.sobrenome}.`
    );
}

emprestarLivro(loan1);

console.log(book2.disponivel);

devolverLivro(loan1);

console.log(book2.disponivel);
