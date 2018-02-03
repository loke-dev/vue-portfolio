import * as images from '../../assets/img/repos';

export default [
  /* Career */
  {
    name: 'GitLab EE',
    org: 'GitLab',
    orgLink: 'https://about.gitlab.com',
    orgImage: images.GitLab,
    date: new Date(2017, 3, 28),
    url: 'https://about.gitlab.com/features/#ee-premium',
    repoUrl: 'https://gitlab.com/gitlab-org/gitlab-ee',
    imageSrc: 'gitlab-ee-repo.png',
    projectImage: 'gitlab-ee.png',
    tags: ['ruby', 'rails', 'html', 'css', 'js', 'vue', 'jquery'],
    description: `
      GitLab is an online Git repository manager with a wiki, issue tracking, CI and CD. It is a great.
    `,
  },
  {
    name: 'GitLab CE',
    org: 'GitLab',
    orgLink: 'https://about.gitlab.com',
    orgImage: images.GitLab,
    date: new Date(2017, 4, 12),
    url: 'https://about.gitlab.com/features/#ce',
    repoUrl: 'https://gitlab.com/gitlab-org/gitlab-ce',
    imageSrc: 'gitlab-ce-repo.png',
    projectImage: 'gitlab-ce.png',
    tags: ['ruby', 'rails', 'html', 'css', 'js', 'vue'],
    description: `
      GitLab is an online control over your repositories or projects and allows you to decide whether they are public or private for free.
    `,
  },
  {
    name: 'PDFLab',
    org: 'GitLab',
    orgLink: 'https://about.gitlab.com',
    orgImage: images.GitLab,
    date: new Date(2017, 4, 11),
    url: 'https://gitlab.com/samrose3/pdflab/blob/master/README.md',
    repoUrl: 'https://gitlab.com/samrose3/pdflab',
    imageSrc: 'pdflab-repo.png',
    projectImage: 'pdflab.png',
    tags: ['html', 'js', 'vue'],
    description: `
      PDFLab is a Vue component that makes it easy to render PDF files. It's as simple as passing in the URL of ✨
    `,
  },
  {
    name: 'www-gitlab-com',
    org: 'GitLab',
    orgLink: 'https://about.gitlab.com',
    orgImage: images.GitLab,
    date: new Date(2017, 3, 28),
    url: 'https://about.gitlab.com',
    repoUrl: 'https://gitlab.com/gitlab-com/www-gitlab-com',
    imageSrc: 'www-gitlab-com.png',
    projectImage: 'gitlab-com.png',
    tags: ['ruby', 'middleman', 'html', 'css', 'js', 'jquery'],
    description: 'The landing and infomation site for GitLab.',
  },
  {
    name: 'RESolution',
    org: 'Cadre5',
    orgLink: 'https://www.cadre5.com',
    orgImage: images.Cadre5,
    date: new Date(2016, 11, 7),
    url: 'http://web.ornl.gov/RES/',
    imageSrc: 'res-repo.png',
    projectImage: 'res.jpg',
    tags: ['c#', 'html', 'css', 'js', 'angularjs'],
    description: `
      Project involved highly customize UI and responsive design, requiring extensive knowledge of.
    `,
  },
];
