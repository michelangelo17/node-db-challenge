exports.seed = knex =>
  knex('task_context')
    .del()
    .then(() =>
      knex('task_context').insert([
        {
          task_id: 3,
          context_id: 12,
        },
        {
          task_id: 7,
          context_id: 14,
        },
        {
          task_id: 16,
          context_id: 13,
        },
        {
          task_id: 4,
          context_id: 3,
        },
        {
          task_id: 9,
          context_id: 6,
        },
        {
          task_id: 8,
          context_id: 1,
        },
        {
          task_id: 20,
          context_id: 14,
        },
        {
          task_id: 8,
          context_id: 19,
        },
        {
          task_id: 7,
          context_id: 20,
        },
        {
          task_id: 12,
          context_id: 17,
        },
        {
          task_id: 2,
          context_id: 12,
        },
        {
          task_id: 7,
          context_id: 3,
        },
        {
          task_id: 18,
          context_id: 13,
        },
        {
          task_id: 10,
          context_id: 10,
        },
        {
          task_id: 10,
          context_id: 7,
        },
        {
          task_id: 11,
          context_id: 7,
        },
        {
          task_id: 19,
          context_id: 17,
        },
        {
          task_id: 19,
          context_id: 2,
        },
        {
          task_id: 14,
          context_id: 19,
        },
        {
          task_id: 19,
          context_id: 18,
        },
        {
          task_id: 14,
          context_id: 5,
        },
        {
          task_id: 2,
          context_id: 12,
        },
        {
          task_id: 6,
          context_id: 11,
        },
        {
          task_id: 4,
          context_id: 13,
        },
        {
          task_id: 6,
          context_id: 16,
        },
        {
          task_id: 4,
          context_id: 3,
        },
        {
          task_id: 1,
          context_id: 2,
        },
        {
          task_id: 5,
          context_id: 19,
        },
        {
          task_id: 2,
          context_id: 6,
        },
        {
          task_id: 17,
          context_id: 9,
        },
        {
          task_id: 4,
          context_id: 1,
        },
        {
          task_id: 14,
          context_id: 14,
        },
        {
          task_id: 10,
          context_id: 14,
        },
        {
          task_id: 18,
          context_id: 19,
        },
        {
          task_id: 5,
          context_id: 16,
        },
        {
          task_id: 15,
          context_id: 11,
        },
        {
          task_id: 17,
          context_id: 10,
        },
        {
          task_id: 18,
          context_id: 7,
        },
        {
          task_id: 19,
          context_id: 9,
        },
        {
          task_id: 8,
          context_id: 4,
        },
      ])
    )
