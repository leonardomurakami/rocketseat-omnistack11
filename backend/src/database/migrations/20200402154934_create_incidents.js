
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); // id incremental
        table.string('title').notNullable(); // setta uma nova coluna, nome, que nao pode receber valores nulos
        table.string('description').notNullable();
        table.decimal('value').notNullable(); // armazenado como decimal, para armazenarmos o valor da ajuda

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); // cria uma chave estrangeira que referencia a coluna id na tabela ongs
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
