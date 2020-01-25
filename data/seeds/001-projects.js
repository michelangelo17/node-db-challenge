exports.seed = knex =>
  knex('projects')
    .del()
    .then(() =>
      knex('projects').insert([
        {
          name: 'Focused',
          description: 'Organized foreground policy',
          completed: false,
        },
        {
          name: 'Inverse',
          description: 'Profit-focused exuding capacity',
          completed: true,
        },
        {
          name: 'portal',
          description: 'Optional value-added project',
          completed: false,
        },
        {
          name: 'leverage',
          description: 'Front-line asynchronous frame',
          completed: false,
        },
        {
          name: 'hardware',
          description: 'Assimilated encompassing circuit',
          completed: false,
        },
        {
          name: 'grid-enabled',
          description: 'Pre-emptive methodical application',
          completed: false,
        },
        {
          name: 'projection',
          description: 'Realigned disintermediate open architecture',
          completed: false,
        },
        {
          name: 'mission-critical',
          description: 'Customer-focused grid-enabled workforce',
          completed: false,
        },
        {
          name: 'encryption',
          description: 'Optional maximized local area network',
          completed: true,
        },
        {
          name: 'empowering',
          description: 'Persevering directional flexibility',
          completed: false,
        },
      ])
    )
