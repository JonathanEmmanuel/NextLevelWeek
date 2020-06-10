import Knex from "knex";

//Seeds servem para popular a base de dados com dados necessarios antes de inicializar a aplicação
export async function seed(knex: Knex) {
  //await knex.schema.dropTable('items');
  await knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Pilhas e Baterias', image: 'baterias.svg' },
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    { title: 'Eletrônicos', image: 'eletronicos.svg' },
  ])
}