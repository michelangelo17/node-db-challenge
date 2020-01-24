exports.seed = knex =>
  knex('resources')
    .del()
    .then(() =>
      knex('resources').insert([
        {
          name: 'Open-architected',
          description:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        },
        {
          name: 'Stand-alone',
          description:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        },
        {
          name: 'neural-net',
          description: null,
        },
        {
          name: 'Secured',
          description: null,
        },
        {
          name: 'Team-oriented',
          description:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        },
        {
          name: 'strategy',
          description:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        },
        {
          name: 'context-sensitive',
          description:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        },
        {
          name: 'firmware',
          description:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        },
        {
          name: 'Horizontal',
          description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        },
        {
          name: 'project',
          description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        },
        {
          name: 'installation',
          description: null,
        },
        {
          name: 'roads',
          description: null,
        },
        {
          name: 'functionalities',
          description: null,
        },
        {
          name: 'policy',
          description: null,
        },
        {
          name: 'Assimilated',
          description: null,
        },
        {
          name: 'instruction set',
          description:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        },
        {
          name: 'leading edge',
          description:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        },
        {
          name: 'structure',
          description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
        },
        {
          name: 'Object-based',
          description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        },
        {
          name: 'orchestration',
          description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        },
      ])
    )
