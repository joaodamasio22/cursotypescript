// Definição dos tipos para o sistema de biblioteca

type Biblioteca = {
    nome: string,
    endereco: string,
    books?: Book[],
    users?: User[],
    loans?: Loan[],
}

type Book = {
    titulo: string,
    autor: string,
    ano: number,
    disponivel: boolean,
}

type User = {
    Name_User: string,
    Surname_User: string,
    Age_User: number,
    Email_User: string,
    Password_User: string,
}

type Loan = {
    Date_Loan: Date,
    Delivery_Date: Date,
    User_Loan: User,
    Book_Loan: Book,
}




// Exemplo de uso:




const biblioteca: Biblioteca = {
    nome: 'Biblioteca Central',
    endereco: 'Rua Principal, 123',
}

const Book1: Book = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ano: 1899,
    disponivel: true,
}

const Book2: Book = {
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    ano: 1988,
    disponivel: true,
}

const user1: User = {
    Name_User: 'João',
    Surname_User: 'Damasio',
    Age_User: 18,
    Email_User: 'joao.damasio@example.com',
    Password_User: 'senha123',
}

const loan1: Loan = {
    Date_Loan: new Date('2024-06-01'),
    Delivery_Date: new Date('2024-06-15'),
    User_Loan: user1,
    Book_Loan: Book2,
}

// Emprestar o livro para o usuário

function LoanBook(loan: Loan) {
    if (loan.Book_Loan.disponivel) {
        loan.Book_Loan.disponivel = false;
        console.log(`O livro "${loan.Book_Loan.titulo}" foi emprestado para ${loan.User_Loan.Name_User} ${loan.User_Loan.Surname_User}.`);
    }
    else {
        console.log(`O livro "${loan.Book_Loan.titulo}" não está disponível para empréstimo no momento...`);
    }
}

LoanBook(loan1);

// Devolver o livro

function ReturnBook(loan: Loan) {
    if (!loan.Book_Loan.disponivel) {
        loan.Book_Loan.disponivel = true;
        console.log(`O livro "${loan.Book_Loan.titulo}" foi devolvido por ${loan.User_Loan.Name_User} ${loan.User_Loan.Surname_User}.`);
    }
    else {
        console.log(`O livro "${loan.Book_Loan.titulo}" já está disponível na biblioteca.`);
    }
}

ReturnBook(loan1);

console.log(ReturnBook(loan1));
