export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5eb876ae1842f56f3e0a5bf4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-tj4o42es',
                  apiId: '3a6b6438-2cae-45f3-b5c7-3d0f0c0d945f'
                },
                {
                  buildHookId: '5eb876af9b1349ea352920fe',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-uq271vij',
                  apiId: 'e6dc83aa-4335-42c0-b1f2-e74daf0e1cf1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ikaikahussey/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-uq271vij.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
