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
                  buildHookId: '5ff8a801c60b7518649a524c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-k4gjutfp',
                  apiId: '6363d327-ee77-4b8c-b8cc-0dab964784d4'
                },
                {
                  buildHookId: '5ff8a801c60b751fed9a49f3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pvy5j43n',
                  apiId: '98555f73-0952-4f53-a5e8-69bdb1dfb286'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ntlaseca/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pvy5j43n.netlify.app', category: 'apps'}
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
