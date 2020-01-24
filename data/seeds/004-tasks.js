exports.seed = knex =>
  knex('tasks')
    .del()
    .then(() =>
      knex('tasks').insert([
        {
          description: 'vivamus in',
          notes: null,
          completed: false,
          project_id: 6,
        },
        {
          description: 'lobortis sapien sapien non',
          notes:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
          completed: true,
          project_id: 6,
        },
        {
          description: 'sed lacus morbi sem mauris',
          notes:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          completed: true,
          project_id: 1,
        },
        {
          description: 'montes nascetur',
          notes: null,
          completed: false,
          project_id: 5,
        },
        {
          description: 'morbi quis tortor id',
          notes: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          completed: false,
          project_id: 2,
        },
        {
          description: 'semper interdum mauris ullamcorper',
          notes: null,
          completed: false,
          project_id: 8,
        },
        {
          description: 'diam cras pellentesque volutpat',
          notes:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
          completed: true,
          project_id: 3,
        },
        {
          description: 'rhoncus aliquet pulvinar sed nisl',
          notes: null,
          completed: false,
          project_id: 8,
        },
        {
          description: 'at nunc commodo',
          notes:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
          completed: true,
          project_id: 1,
        },
        {
          description: 'pede ac diam cras',
          notes:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
          completed: true,
          project_id: 8,
        },
        {
          description: 'at turpis donec posuere metus',
          notes:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
          completed: true,
          project_id: 10,
        },
        {
          description: 'curabitur gravida nisi',
          notes: null,
          completed: false,
          project_id: 7,
        },
        {
          description: 'libero quis orci nullam molestie',
          notes: null,
          completed: false,
          project_id: 5,
        },
        {
          description: 'ante ipsum primis in faucibus',
          notes: null,
          completed: false,
          project_id: 8,
        },
        {
          description: 'nisi eu',
          notes: null,
          completed: false,
          project_id: 2,
        },
        {
          description: 'bibendum morbi',
          notes:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
          completed: false,
          project_id: 6,
        },
        {
          description: 'eu interdum eu tincidunt in',
          notes: null,
          completed: false,
          project_id: 2,
        },
        {
          description: 'orci mauris lacinia',
          notes:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
          completed: false,
          project_id: 4,
        },
        {
          description: 'commodo vulputate justo',
          notes: null,
          completed: false,
          project_id: 3,
        },
        {
          description: 'sed accumsan felis',
          notes:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
          completed: false,
          project_id: 5,
        },
      ])
    )
