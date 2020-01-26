exports.seed = knex =>
  knex('project_resource')
    .del()
    .then(() =>
      knex('project_resource').insert([
        {
          project_id: 7,
          resource_id: 8,
        },
        {
          project_id: 10,
          resource_id: 10,
        },
        {
          project_id: 1,
          resource_id: 4,
        },
        {
          project_id: 2,
          resource_id: 9,
        },
        {
          project_id: 6,
          resource_id: 8,
        },
        {
          project_id: 10,
          resource_id: 5,
        },
        {
          project_id: 4,
          resource_id: 7,
        },
        {
          project_id: 4,
          resource_id: 5,
        },
        {
          project_id: 7,
          resource_id: 3,
        },
        {
          project_id: 4,
          resource_id: 1,
        },
        {
          project_id: 8,
          resource_id: 5,
        },
        {
          project_id: 8,
          resource_id: 6,
        },
        {
          project_id: 10,
          resource_id: 3,
        },
        {
          project_id: 7,
          resource_id: 7,
        },
        {
          project_id: 2,
          resource_id: 10,
        },
        {
          project_id: 10,
          resource_id: 4,
        },
        {
          project_id: 5,
          resource_id: 5,
        },
      ])
    )
