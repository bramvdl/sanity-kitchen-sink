export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628b549663d6b21c88542211',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6xtn8u33',
                  apiId: 'e1eb5729-4598-494d-9207-c64825e9bcd8'
                },
                {
                  buildHookId: '628b54972e98e3212aa962ef',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sty3u9x1',
                  apiId: '3992cf25-052d-4c5d-b4e1-49be73e44729'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bramvdl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sty3u9x1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
