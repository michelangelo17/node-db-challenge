exports.seed = knex =>
  knex('contexts')
    .del()
    .then(() =>
      knex('contexts').insert([
        {
          name: 'Lakeland',
        },
        {
          name: 'Tandag',
        },
        {
          name: 'Mangaldan',
        },
        {
          name: 'Middelburg',
        },
        {
          name: 'Carora',
        },
        {
          name: 'Gujō',
        },
        {
          name: 'Sirdaryo',
        },
        {
          name: 'Phủ Thông',
        },
        {
          name: 'Daoxu',
        },
        {
          name: 'Lututów',
        },
        {
          name: 'Rybí',
        },
        {
          name: 'Fundong',
        },
        {
          name: 'Surami',
        },
        {
          name: 'Tawali',
        },
        {
          name: 'Jinluo',
        },
        {
          name: 'Sherbrooke',
        },
        {
          name: 'Sulangan',
        },
        {
          name: 'Pinheiro',
        },
        {
          name: 'Diapaga',
        },
        {
          name: 'Fray Luis A. Beltrán',
        },
      ])
    )
