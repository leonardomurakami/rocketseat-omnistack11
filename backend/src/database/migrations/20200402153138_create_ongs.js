
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary(); // primary key, leia https://www.techopedia.com/definition/5547/primary-key para mais informacoes
        table.string('name').notNullable(); // setta uma nova coluna, nome, que nao pode receber valores nulos
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // `2` indica o numero de caracteres que devem ser recebidos na UF
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
