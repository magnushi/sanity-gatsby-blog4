export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5ce3dedfe73cd8a6dc43b41c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog4-studio',
                  apiId: 'ab309c79-4b8d-4377-b169-b178798a612c'
                },
                {
                  buildHookId: '5ce3dedfbe5a12a4f850f7ef',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog4',
                  apiId: 'd854537e-d5a5-4825-afeb-6383c347539c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog4',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog4.netlify.com', category: 'apps'}
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
