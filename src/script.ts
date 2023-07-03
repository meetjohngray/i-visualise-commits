import { PrismaClient } from '@prisma/client'

const data = [
  {
    name: 'Sarah',
    emails: [
      'sarahchungwu@gmail.com',
      '108772330+sarahchungwu@users.noreply.github.com'
    ]
  },
  {
    name: 'Jaelyn',
    emails: [
      'leejay1020@gmail.com',
      '126551299+jaelyn-lee@users.noreply.github.com'
    ]
  },
  {
    name: 'Tem',
    emails: [
      '128651264+Temuera-Pearse@users.noreply.github.com',
      'tem.pearse01@gmail.com'
    ]
  },
  {
    name: 'Carlos',
    emails: [
      '128659323+carlos-aguilar11@users.noreply.github.com',
      'aguilar.pinero@gmail.com'
    ]
  },
  {
    name: 'Rocio',
    emails: [
      '1rocioperalta@gmail.com',
      '108355326+rocio-peralta@users.noreply.github.com'
    ]
  },
  {
    name: 'Jordan',
    emails: ['73576588+Jordan-Lowe@users.noreply.github.com']
  },
  { name: 'Adam', emails: ['adamcrowley@gmail.com'] },
  {
    name: 'Andrew',
    emails: [
      '26266678+andrew-trotter@users.noreply.github.com',
      'andrewjtrotter@gmail.com'
    ]
  },
  {
    name: 'Maia',
    emails: [
      'tarapipipim@gmail.com',
      '128327285+maia-tarapipipi@users.noreply.github.com'
    ]
  },
  {
    name: 'Quinn',
    emails: [
      'quinngiibson@gmail.com',
      '102550743+quinn-gibson@users.noreply.github.com'
    ]
  },
  {
    name: 'Mikhail',
    emails: [
      'mikhailrobinson0@gmail.com',
      '126931597+mikhail-robinson@users.noreply.github.com'
    ]
  },
  { name: 'Ahmad', emails: ['eng.ahmed.anwar@gmail.com'] },
  { name: 'Jane', emails: ['jiejanezhang2012@gmail.com'] },
  {
    name: 'Rigelle',
    emails: [
      'rigellecruz@gmail.com',
      '128273377+rigelle-cruz@users.noreply.github.com'
    ]
  },
  { name: 'Jordan-Lowe', emails: ['jordanlowe659@gmail.com'] },
  { name: 'GitHub', emails: ['noreply@github.com'] },
  {
    name: 'Leroy',
    emails: [
      'leroybrown247@gmail.com',
      '128452536+leroybrown247@users.noreply.github.com'
    ]
  },
  {
    name: 'Daniel',
    emails: [
      'danielgrabczewski@gmail.com',
      '104661123+daniel-grabczewski@users.noreply.github.com'
    ]
  }
]

const push = {
  ref: 'refs/heads/110-add-styling-animation',
  before: '121e5d5411f8b58321ab96ef5bb2b501ea9e3ac8',
  after: '7771e5cf9bb2b292e1567610353797c7b0266470',
  repository: {
    id: 659453250,
    node_id: 'R_kgDOJ051Qg',
    name: 'pinky-promise',
    full_name: 'kahikatea-2023/pinky-promise',
    private: false,
    owner: {
      name: 'kahikatea-2023',
      email: null,
      login: 'kahikatea-2023',
      id: 131830065,
      node_id: 'O_kgDOB9uRMQ',
      avatar_url: 'https://avatars.githubusercontent.com/u/131830065?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kahikatea-2023',
      html_url: 'https://github.com/kahikatea-2023',
      followers_url: 'https://api.github.com/users/kahikatea-2023/followers',
      following_url:
        'https://api.github.com/users/kahikatea-2023/following{/other_user}',
      gists_url: 'https://api.github.com/users/kahikatea-2023/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/kahikatea-2023/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/kahikatea-2023/subscriptions',
      organizations_url: 'https://api.github.com/users/kahikatea-2023/orgs',
      repos_url: 'https://api.github.com/users/kahikatea-2023/repos',
      events_url:
        'https://api.github.com/users/kahikatea-2023/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/kahikatea-2023/received_events',
      type: 'Organization',
      site_admin: false
    },
    html_url: 'https://github.com/kahikatea-2023/pinky-promise',
    description: 'Maia, Jordan, Rocio, Mikhail and Andrew',
    fork: false,
    url: 'https://github.com/kahikatea-2023/pinky-promise',
    forks_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/forks',
    keys_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/teams',
    hooks_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/hooks',
    issue_events_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/events',
    assignees_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/branches{/branch}',
    tags_url: 'https://api.github.com/repos/kahikatea-2023/pinky-promise/tags',
    blobs_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/languages',
    stargazers_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/stargazers',
    contributors_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/contributors',
    subscribers_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/subscribers',
    subscription_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/subscription',
    commits_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/merges',
    archive_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/downloads',
    issues_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/labels{/name}',
    releases_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/kahikatea-2023/pinky-promise/deployments',
    created_at: 1687902432,
    updated_at: '2023-07-01T22:11:42Z',
    pushed_at: 1688363947,
    git_url: 'git://github.com/kahikatea-2023/pinky-promise.git',
    ssh_url: 'git@github.com:kahikatea-2023/pinky-promise.git',
    clone_url: 'https://github.com/kahikatea-2023/pinky-promise.git',
    svn_url: 'https://github.com/kahikatea-2023/pinky-promise',
    homepage: null,
    size: 4759,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 67,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 67,
    watchers: 0,
    default_branch: 'main',
    stargazers: 0,
    master_branch: 'main',
    organization: 'kahikatea-2023'
  },
  pusher: {
    name: 'rocio-peralta',
    email: '108355326+rocio-peralta@users.noreply.github.com'
  },
  organization: {
    login: 'kahikatea-2023',
    id: 131830065,
    node_id: 'O_kgDOB9uRMQ',
    url: 'https://api.github.com/orgs/kahikatea-2023',
    repos_url: 'https://api.github.com/orgs/kahikatea-2023/repos',
    events_url: 'https://api.github.com/orgs/kahikatea-2023/events',
    hooks_url: 'https://api.github.com/orgs/kahikatea-2023/hooks',
    issues_url: 'https://api.github.com/orgs/kahikatea-2023/issues',
    members_url: 'https://api.github.com/orgs/kahikatea-2023/members{/member}',
    public_members_url:
      'https://api.github.com/orgs/kahikatea-2023/public_members{/member}',
    avatar_url: 'https://avatars.githubusercontent.com/u/131830065?v=4',
    description: '2023-05-08T00:00:00Z'
  },
  enterprise: {
    id: 3754,
    slug: 'enspiral-dev-academy',
    name: 'Dev Academy Aotearoa',
    node_id: 'MDEwOkVudGVycHJpc2UzNzU0',
    avatar_url: 'https://avatars.githubusercontent.com/b/3754?v=4',
    description: 'Fullstack Web Development for Humans',
    website_url: 'https://devacademy.co.nz',
    html_url: 'https://github.com/enterprises/enspiral-dev-academy',
    created_at: '2020-07-30T16:15:30Z',
    updated_at: '2022-07-27T00:16:07Z'
  },
  sender: {
    login: 'rocio-peralta',
    id: 108355326,
    node_id: 'U_kgDOBnVe_g',
    avatar_url: 'https://avatars.githubusercontent.com/u/108355326?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/rocio-peralta',
    html_url: 'https://github.com/rocio-peralta',
    followers_url: 'https://api.github.com/users/rocio-peralta/followers',
    following_url:
      'https://api.github.com/users/rocio-peralta/following{/other_user}',
    gists_url: 'https://api.github.com/users/rocio-peralta/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/rocio-peralta/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/rocio-peralta/subscriptions',
    organizations_url: 'https://api.github.com/users/rocio-peralta/orgs',
    repos_url: 'https://api.github.com/users/rocio-peralta/repos',
    events_url: 'https://api.github.com/users/rocio-peralta/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/rocio-peralta/received_events',
    type: 'User',
    site_admin: false
  },
  created: false,
  deleted: false,
  forced: false,
  base_ref: null,
  compare:
    'https://github.com/kahikatea-2023/pinky-promise/compare/121e5d5411f8...7771e5cf9bb2',
  commits: [
    {
      id: 'f9d432023bc2e36780e515d14210987ffc4e6f77',
      tree_id: 'eb447614c97231e87ae78cdbedac86b932a6b283',
      distinct: false,
      message: 'working except from front end. routes work fine, maybe auth0',
      timestamp: '2023-07-01T17:28:28+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/f9d432023bc2e36780e515d14210987ffc4e6f77',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: [
        'client/apis/promises.ts',
        'client/components/Promise/Promise.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.tsx',
        'models/pledge_models.ts',
        'server/db/dataBaseFunctions/promisesDB.ts',
        'server/routes/promises.ts'
      ]
    },
    {
      id: '2ad14cbee8783510689f7c75e8abbd1f1ece0abd',
      tree_id: 'f5e05d0232b6a8fba0048cfe9eadbdfa1f518f1a',
      distinct: false,
      message: 'add function for addFriendbyId',
      timestamp: '2023-07-02T17:36:29+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/2ad14cbee8783510689f7c75e8abbd1f1ece0abd',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['server/db/dataBaseFunctions/friendsDB.ts']
    },
    {
      id: '454f09e9c5a9f867cf2ea083ecc72aae1d2cb443',
      tree_id: 'ea1768f98f370fc3217f09b2872e20d01c794d3c',
      distinct: false,
      message: 'change function name',
      timestamp: '2023-07-02T20:46:58+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/454f09e9c5a9f867cf2ea083ecc72aae1d2cb443',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['server/db/dataBaseFunctions/friendsDB.ts']
    },
    {
      id: 'dc9581d7ed9197047878001586ece67f2304fd1e',
      tree_id: '1afb16bc517fe92741bc58f3d5dcddb58073fce6',
      distinct: false,
      message: 'write test for addFriend function',
      timestamp: '2023-07-02T20:47:10+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/dc9581d7ed9197047878001586ece67f2304fd1e',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['server/db/dataBaseFunctions/friendsDB.test.ts']
    },
    {
      id: '08b95dd118b2f1f5bf69a0a2dd2af42ae8765276',
      tree_id: '8d534489650a10e88988f390851b6855b652bc74',
      distinct: false,
      message: 'create addFriend api function',
      timestamp: '2023-07-02T21:33:37+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/08b95dd118b2f1f5bf69a0a2dd2af42ae8765276',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['client/apis/friends.ts']
    },
    {
      id: 'dc2f5bcc0764e37aa986f05d6bd8ae303a5fc1fd',
      tree_id: 'ef3d0e08277895548fc9389143884d6498179f64',
      distinct: false,
      message: 'create post route for add friend',
      timestamp: '2023-07-02T21:33:50+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/dc2f5bcc0764e37aa986f05d6bd8ae303a5fc1fd',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['server/routes/friends.test.ts']
    },
    {
      id: '2f699d9bf640c00792d39e23faec55248473b4a0',
      tree_id: '14aedb74534848dcb7125b3599be36ac2389c248',
      distinct: false,
      message: 'create post route for addFriend',
      timestamp: '2023-07-02T21:34:16+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/2f699d9bf640c00792d39e23faec55248473b4a0',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['server/routes/friends.ts']
    },
    {
      id: '8c2519b4e50f3567a71202b25f3690c6a93140d6',
      tree_id: '3ea49bdb5874c9ff3db39a8104876124d1c22df6',
      distinct: false,
      message:
        "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T08:49:48+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/8c2519b4e50f3567a71202b25f3690c6a93140d6',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [
        'client/apis/friends.ts',
        'client/components/AddPromisePage/AddPromiseForm.tsx',
        'client/components/AddPromisePage/AddPromisePage.tsx',
        'client/components/AllPromisesItem/AllPromisesItem.tsx',
        'client/components/AllPromisesPage/AllPromisesPage.tsx',
        'server/routes/friends.test.ts',
        'server/routes/promises.test.ts'
      ],
      removed: [],
      modified: [
        '.gitignore',
        'client/apis/promises.ts',
        'client/components/App.tsx',
        'client/components/Header.tsx',
        'client/components/Home.tsx',
        'client/components/LogoutButton.tsx',
        'client/components/Nav.tsx',
        'client/components/Promise/Promise.test.tsx',
        'client/components/UserProfileForm.tsx',
        'client/index.tsx',
        'models/friends_models.ts',
        'models/pledge_models.ts',
        'package-lock.json',
        'package.json',
        'server/db/dataBaseFunctions/friendsDB.test.ts',
        'server/db/dataBaseFunctions/friendsDB.ts',
        'server/db/dataBaseFunctions/promisesDB.test.ts',
        'server/db/dataBaseFunctions/promisesDB.ts',
        'server/db/dataBaseFunctions/usersDB.test.ts',
        'server/db/migrations/20230628031612_promises.js',
        'server/db/seeds/2-friends.js',
        'server/db/seeds/3-promises.js',
        'server/routes/friends.ts',
        'server/routes/promises.ts',
        'server/server.ts',
        'tailwind.config.js'
      ]
    },
    {
      id: '62790d4991887a86f6a5847b8989e23a5cc18225',
      tree_id: '61df682cb686efd487069eb1ce80b2507e1ce670',
      distinct: false,
      message:
        "Merge branch 'main' of https://github.com/kahikatea-2023/pinky-promise into 16-add-friend",
      timestamp: '2023-07-03T08:54:13+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/62790d4991887a86f6a5847b8989e23a5cc18225',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [
        '.vscode/settings.json',
        'client/components/EditProfilePage.tsx',
        'settings.json'
      ],
      removed: [],
      modified: [
        'client/apis/user.ts',
        'client/components/App.tsx',
        'client/components/UserProfileForm.tsx',
        'client/components/UserProfilePage.tsx',
        'server/db/dataBaseFunctions/usersDB.ts',
        'server/routes/users.test.ts',
        'server/routes/users.ts'
      ]
    },
    {
      id: '224ea6ff193dd1f67cc37255387bcfb31c98595d',
      tree_id: '95bfb600e895dc901c318655354dc9626643e920',
      distinct: false,
      message: 'Working front to back. Next is tests',
      timestamp: '2023-07-03T10:16:49+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/224ea6ff193dd1f67cc37255387bcfb31c98595d',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: [
        'client/apis/promises.ts',
        'client/components/Promise/Promise.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.tsx',
        'server/routes/promises.ts'
      ]
    },
    {
      id: '96d8fbd8d53be993e4e067dea5610e7ea32167ae',
      tree_id: '4c90a5bd48655c0d548122ac3fc1d33e634c90c3',
      distinct: false,
      message: 'Added relative path to background',
      timestamp: '2023-07-03T10:18:16+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/96d8fbd8d53be993e4e067dea5610e7ea32167ae',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: ['client/components/App.tsx']
    },
    {
      id: '56019fdd5c86871a4b71ea8839704193d7765dd2',
      tree_id: '4c90a5bd48655c0d548122ac3fc1d33e634c90c3',
      distinct: false,
      message:
        "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T10:20:40+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/56019fdd5c86871a4b71ea8839704193d7765dd2',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: []
    },
    {
      id: 'e9a3cedd568e21b2cd47e0905f1eecc7dad3b057',
      tree_id: '94fc65a8e234010220f40e326e4ed46a543b7c43',
      distinct: false,
      message:
        "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T10:20:49+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/e9a3cedd568e21b2cd47e0905f1eecc7dad3b057',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: [
        'client/apis/promises.test.ts',
        'client/components/App.test.tsx',
        'client/components/Promise/Promise.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx'
      ]
    },
    {
      id: '7f385c5e5c295162e9e3c5cb71a8a513740b292b',
      tree_id: '868bba9807da98a9ad6e7b87db3ac527aa126eab',
      distinct: false,
      message: 'add backend for addFriends function',
      timestamp: '2023-07-03T11:39:09+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/7f385c5e5c295162e9e3c5cb71a8a513740b292b',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: [
        'server/db/dataBaseFunctions/friendsDB.ts',
        'server/routes/friends.ts'
      ]
    },
    {
      id: '4a09d7798603381d26a9998a36fe4f50566582d0',
      tree_id: '51d1ad91f18a4d2d5f50d27137b931459b5cef02',
      distinct: false,
      message: 'start front end for addFriends function',
      timestamp: '2023-07-03T11:39:40+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/4a09d7798603381d26a9998a36fe4f50566582d0',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [
        'client/components/AddFriendsItems/AddFriendsItem.tsx',
        'client/components/AddFriendsPage/AddFriendsPage.tsx'
      ],
      removed: [],
      modified: ['client/apis/friends.ts', 'client/index.tsx']
    },
    {
      id: 'bd480d240e016cdbdb3459cf412214f67328b3fb',
      tree_id: 'fad08d2e9c0ccf495c475df57a91a7c6e7e6ab6d',
      distinct: false,
      message:
        "Merge branch 'main' of https://github.com/kahikatea-2023/pinky-promise into 16-add-friend",
      timestamp: '2023-07-03T11:39:54+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/bd480d240e016cdbdb3459cf412214f67328b3fb',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [
        'client/components/AddPromisePage/Animation.test.tsx',
        'client/components/AddPromisePage/PromiseMadeAnimation.tsx',
        'public/confetti.gif',
        'public/explosion.gif',
        'public/promiseMade.svg'
      ],
      removed: [],
      modified: [
        '.vscode/settings.json',
        'client/apis/promises.test.ts',
        'client/apis/promises.ts',
        'client/components/AddPromisePage/AddPromiseForm.tsx',
        'client/components/AddPromisePage/AddPromisePage.tsx',
        'client/components/App.test.tsx',
        'client/components/App.tsx',
        'client/components/Header.tsx',
        'client/components/Promise/Promise.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx',
        'client/components/UserProfileForm.tsx',
        'models/pledge_models.ts',
        'package-lock.json',
        'package.json',
        'server/db/dataBaseFunctions/promisesDB.test.ts',
        'server/routes/friends.test.ts',
        'server/routes/promises.ts'
      ]
    },
    {
      id: '96697bc905272d076c84749bb7fac99dc9b19938',
      tree_id: '49299e6f5f44b235849da0a47d98ef2a33558a93',
      distinct: false,
      message:
        "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T11:44:53+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/96697bc905272d076c84749bb7fac99dc9b19938',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [
        'client/components/AddPromisePage/Animation.test.tsx',
        'client/components/AddPromisePage/PromiseMadeAnimation.tsx',
        'public/confetti.gif',
        'public/explosion.gif',
        'public/promiseMade.svg'
      ],
      removed: [],
      modified: [
        'client/apis/promises.ts',
        'client/components/AddPromisePage/AddPromiseForm.tsx',
        'client/components/AddPromisePage/AddPromisePage.tsx',
        'package-lock.json',
        'package.json',
        'server/db/dataBaseFunctions/promisesDB.test.ts',
        'server/routes/friends.test.ts',
        'server/routes/promises.ts'
      ]
    },
    {
      id: 'ee3ec1cf32d4a0eb458dff6c3b8a1a273616e5aa',
      tree_id: 'c2d34830930ce58818e4d6ed46b03e8b467bd403',
      distinct: false,
      message: 'wrote tests for Promise component',
      timestamp: '2023-07-03T11:45:11+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/ee3ec1cf32d4a0eb458dff6c3b8a1a273616e5aa',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: ['client/components/Promise/Promise.test.tsx']
    },
    {
      id: '547e3a66f9cb6ab582bde8e482c2c2d6b7bb65c8',
      tree_id: 'f73774b920573f82f6c6a1d3280a405f3f90cdbb',
      distinct: false,
      message: 'completed PromiseDetailsPage',
      timestamp: '2023-07-03T14:28:56+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/547e3a66f9cb6ab582bde8e482c2c2d6b7bb65c8',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: [
        'client/components/Promise/Promise.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.tsx',
        'server/db/dataBaseFunctions/promisesDB.test.ts',
        'server/routes/promises.test.ts',
        'server/routes/promises.ts'
      ]
    },
    {
      id: '154ea8c675ef8445fd02a80fb70d8ce752806dda',
      tree_id: '495c6fbe73f0f022ec69def7017cb735d03db62b',
      distinct: false,
      message: 'create add friend button',
      timestamp: '2023-07-03T15:15:46+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/154ea8c675ef8445fd02a80fb70d8ce752806dda',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: [
        'client/apis/friends.ts',
        'client/components/AddFriendsItems/AddFriendsItem.tsx',
        'client/components/AddFriendsPage/AddFriendsPage.tsx',
        'models/friends_models.ts',
        'server/db/dataBaseFunctions/friendsDB.ts',
        'server/routes/friends.ts'
      ]
    },
    {
      id: '6f6bcc7988c255e68191cf6225635644dc76cc15',
      tree_id: '0e06928b783729795ec0d712646ae8a5871df198',
      distinct: false,
      message:
        "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T15:29:41+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/6f6bcc7988c255e68191cf6225635644dc76cc15',
      author: {
        name: 'Maia',
        email: 'tarapipipim@gmail.com',
        username: 'maia-tarapipipi'
      },
      committer: {
        name: 'Maia',
        email: 'tarapipipim@gmail.com',
        username: 'maia-tarapipipi'
      },
      added: [
        '.vscode/settings.json',
        'client/components/AddPromisePage/Animation.test.tsx',
        'client/components/AddPromisePage/PromiseMadeAnimation.tsx',
        'client/components/EditProfilePage.tsx',
        'public/confetti.gif',
        'public/explosion.gif',
        'public/promiseMade.svg',
        'settings.json'
      ],
      removed: [],
      modified: [
        'client/apis/promises.test.ts',
        'client/apis/promises.ts',
        'client/apis/user.ts',
        'client/components/AddPromisePage/AddPromiseForm.tsx',
        'client/components/AddPromisePage/AddPromisePage.tsx',
        'client/components/AllPromisesItem/AllPromisesItem.tsx',
        'client/components/App.test.tsx',
        'client/components/App.tsx',
        'client/components/Header.tsx',
        'client/components/Nav.tsx',
        'client/components/Promise/Promise.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx',
        'client/components/UserProfileForm.tsx',
        'client/components/UserProfilePage.tsx',
        'package-lock.json',
        'package.json',
        'server/db/dataBaseFunctions/promisesDB.test.ts',
        'server/db/dataBaseFunctions/usersDB.ts',
        'server/routes/friends.test.ts',
        'server/routes/promises.ts',
        'server/routes/users.test.ts',
        'server/routes/users.ts'
      ]
    },
    {
      id: 'a2c58aec5ab54a728bb1168aec24213510deb327',
      tree_id: '9b6f58eaafe01478ea92ef0b407dbd0a0b27ee88',
      distinct: false,
      message:
        "Merge branch '5-As-a-user-I-would-like-to-keep-a-promise' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T15:37:26+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/a2c58aec5ab54a728bb1168aec24213510deb327',
      author: {
        name: 'Maia',
        email: 'tarapipipim@gmail.com',
        username: 'maia-tarapipipi'
      },
      committer: {
        name: 'Maia',
        email: 'tarapipipim@gmail.com',
        username: 'maia-tarapipipi'
      },
      added: [],
      removed: [
        '.vscode/settings.json',
        'client/components/EditProfilePage.tsx',
        'settings.json'
      ],
      modified: [
        'client/apis/user.ts',
        'client/components/App.tsx',
        'client/components/Header.tsx',
        'client/components/Promise/Promise.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.tsx',
        'client/components/UserProfilePage.tsx',
        'server/db/dataBaseFunctions/promisesDB.test.ts',
        'server/db/dataBaseFunctions/usersDB.ts',
        'server/routes/promises.test.ts',
        'server/routes/users.test.ts',
        'server/routes/users.ts'
      ]
    },
    {
      id: 'c99c6b56787d4b4a75fc4ac2f53339e59978dc11',
      tree_id: '794ec8e0d8272c902668209d234c38c4fffdaa2a',
      distinct: false,
      message: 'Main merges',
      timestamp: '2023-07-03T15:37:49+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/c99c6b56787d4b4a75fc4ac2f53339e59978dc11',
      author: {
        name: 'Maia',
        email: 'tarapipipim@gmail.com',
        username: 'maia-tarapipipi'
      },
      committer: {
        name: 'Maia',
        email: 'tarapipipim@gmail.com',
        username: 'maia-tarapipipi'
      },
      added: [],
      removed: [],
      modified: ['.gitignore']
    },
    {
      id: '731a2858cb0bdb63b609b4ae0f021825f79a71e0',
      tree_id: 'b8d8b3d4fb4ce4d8a666996b17e293b9db25e80e',
      distinct: false,
      message: 'fixed linting error',
      timestamp: '2023-07-03T15:42:55+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/731a2858cb0bdb63b609b4ae0f021825f79a71e0',
      author: {
        name: 'Maia',
        email: 'tarapipipim@gmail.com',
        username: 'maia-tarapipipi'
      },
      committer: {
        name: 'Maia',
        email: 'tarapipipim@gmail.com',
        username: 'maia-tarapipipi'
      },
      added: [],
      removed: [],
      modified: ['server/routes/friends.test.ts']
    },
    {
      id: '1f8f0f2a2fd56a53de8e91fd83ed314a8dae9ef7',
      tree_id: '49fc93747aaf78b792f637b6a0cc49406f3f06e8',
      distinct: false,
      message: 'add re render of page on click',
      timestamp: '2023-07-03T15:43:15+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/1f8f0f2a2fd56a53de8e91fd83ed314a8dae9ef7',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['client/components/AddFriendsItems/AddFriendsItem.tsx']
    },
    {
      id: '11fcda899772fd44baffda2c7041062080ab697f',
      tree_id: 'b0a9436f6d27cce74f6ee44975ffd083318dbb88',
      distinct: false,
      message:
        "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T15:54:08+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/11fcda899772fd44baffda2c7041062080ab697f',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: [
        'client/components/AllPromisesItem/AllPromisesItem.tsx',
        'client/components/Nav.tsx',
        'client/components/UserProfileForm.tsx'
      ]
    },
    {
      id: '8e776711bf2aec2cea7e8b74d2e09a8b9a260c42',
      tree_id: 'b8d8b3d4fb4ce4d8a666996b17e293b9db25e80e',
      distinct: false,
      message:
        "Merge branch '5-As-a-user-I-would-like-to-keep-a-promise' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T15:54:38+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/8e776711bf2aec2cea7e8b74d2e09a8b9a260c42',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: [
        '.gitignore',
        'server/routes/friends.test.ts',
        'server/routes/promises.ts'
      ]
    },
    {
      id: 'be74c7d76b8158ba1575754cc819df9e7581dd0b',
      tree_id: '994a05a178eb1156cee66c088c9140cb35986e23',
      distinct: false,
      message: 'Finished styling the add promises page',
      timestamp: '2023-07-03T15:59:07+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/be74c7d76b8158ba1575754cc819df9e7581dd0b',
      author: {
        name: 'Jordan-Lowe',
        email: 'jordanlowe659@gmail.com',
        username: 'Jordan-Lowe'
      },
      committer: {
        name: 'Jordan-Lowe',
        email: 'jordanlowe659@gmail.com',
        username: 'Jordan-Lowe'
      },
      added: [],
      removed: [],
      modified: [
        'client/components/AddPromisePage/AddPromiseForm.tsx',
        'client/components/UserProfileForm.tsx'
      ]
    },
    {
      id: 'd308d2c3a6c704cbb6fa7b932709f15124822072',
      tree_id: '73c8f81cb3a71f821854e8615bb3edad09d2c619',
      distinct: false,
      message: 'add icon to button',
      timestamp: '2023-07-03T16:01:58+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/d308d2c3a6c704cbb6fa7b932709f15124822072',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['client/components/AddFriendsItems/AddFriendsItem.tsx']
    },
    {
      id: '97d66782d1e8d5715d80e0db2795eba8a8576b2c',
      tree_id: '9a9444f978d5b273b8fb63ebfcacd1970e0087f6',
      distinct: false,
      message: 'remove two friends from user profile',
      timestamp: '2023-07-03T16:06:51+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/97d66782d1e8d5715d80e0db2795eba8a8576b2c',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['server/db/seeds/2-friends.js']
    },
    {
      id: 'c99596e9871d9aedeae9b913288057c88907c8b7',
      tree_id: '7b4a2c731a99c04c56c16d14e4cca3493f639473',
      distinct: false,
      message: 'change display name to be username',
      timestamp: '2023-07-03T16:07:05+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/c99596e9871d9aedeae9b913288057c88907c8b7',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['client/components/AddFriendsItems/AddFriendsItem.tsx']
    },
    {
      id: '256ca3ba6daea087c7ffd936c88f52dd056cbab3',
      tree_id: '8a457f8e3f0171e812678f402863062596f475d9',
      distinct: false,
      message: 'resolved zod error in test',
      timestamp: '2023-07-03T16:23:29+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/256ca3ba6daea087c7ffd936c88f52dd056cbab3',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: [
        'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx',
        'models/pledge_models.ts',
        'server/routes/promises.test.ts'
      ]
    },
    {
      id: 'c8931bb20ec986f646fda09c00878d0c64a8d8ee',
      tree_id: 'a94ac4fd433dd63b513669abb8afe6918e88c96e',
      distinct: false,
      message: 'Commit for testing',
      timestamp: '2023-07-03T16:30:50+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/c8931bb20ec986f646fda09c00878d0c64a8d8ee',
      author: {
        name: 'Jordan-Lowe',
        email: 'jordanlowe659@gmail.com',
        username: 'Jordan-Lowe'
      },
      committer: {
        name: 'Jordan-Lowe',
        email: 'jordanlowe659@gmail.com',
        username: 'Jordan-Lowe'
      },
      added: [],
      removed: [],
      modified: ['client/components/AddPromisePage/AddPromiseForm.tsx']
    },
    {
      id: '8f820896e4496eaaec754fd53fd7b7ca1cb4c784',
      tree_id: '566b5c0d2b031f3775327da533b58355d52bd650',
      distinct: false,
      message: 'update test',
      timestamp: '2023-07-03T16:31:07+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/8f820896e4496eaaec754fd53fd7b7ca1cb4c784',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['server/db/dataBaseFunctions/friendsDB.test.ts']
    },
    {
      id: 'ec714a60651c4997b11ae768dfb64125a33d86d5',
      tree_id: '20a2a3f524a01456895bc702ba797123e86ec1e8',
      distinct: false,
      message: 'remove unused imports',
      timestamp: '2023-07-03T16:31:35+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/ec714a60651c4997b11ae768dfb64125a33d86d5',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: ['server/db/dataBaseFunctions/friendsDB.ts']
    },
    {
      id: '89edb248de2dc4c080b04b7de98ac409c1ccac40',
      tree_id: '14fd3fb13fd890514aec781dfadb753f4fcf129a',
      distinct: false,
      message:
        "Merge branch 'main' of https://github.com/kahikatea-2023/pinky-promise into 16-add-friend",
      timestamp: '2023-07-03T16:32:01+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/89edb248de2dc4c080b04b7de98ac409c1ccac40',
      author: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'Mikhail Robinson',
        email: 'mikhailrobinson0@gmail.com',
        username: 'mikhail-robinson'
      },
      added: [],
      removed: [],
      modified: [
        '.vscode/settings.json',
        'client/components/AllPromisesItem/AllPromisesItem.tsx',
        'client/components/Nav.tsx',
        'client/components/UserProfileForm.tsx'
      ]
    },
    {
      id: '396cc1c2f60d2d5564dd95c6b7a84e03bd3a3788',
      tree_id: 'a94ac4fd433dd63b513669abb8afe6918e88c96e',
      distinct: false,
      message:
        'Merge pull request #112 from kahikatea-2023/95-stylingForAddPromise\n\n95 styling for add promise',
      timestamp: '2023-07-03T17:06:33+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/396cc1c2f60d2d5564dd95c6b7a84e03bd3a3788',
      author: {
        name: 'andrew-trotter',
        email: '26266678+andrew-trotter@users.noreply.github.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'GitHub',
        email: 'noreply@github.com',
        username: 'web-flow'
      },
      added: [],
      removed: [],
      modified: [
        '.vscode/settings.json',
        'client/components/AddPromisePage/AddPromiseForm.tsx',
        'client/components/AddPromisePage/Animation.test.tsx',
        'client/components/UserProfileForm.tsx',
        'tailwind.config.js'
      ]
    },
    {
      id: '618f279670dae0e95dcc49ce2fceea654606ced3',
      tree_id: '3e8fd04b95c79902285e8a6ea03eeb795a874f6a',
      distinct: false,
      message:
        'Merge pull request #115 from kahikatea-2023/16-add-friend\n\n16 add friend',
      timestamp: '2023-07-03T17:17:13+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/618f279670dae0e95dcc49ce2fceea654606ced3',
      author: {
        name: 'andrew-trotter',
        email: '26266678+andrew-trotter@users.noreply.github.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'GitHub',
        email: 'noreply@github.com',
        username: 'web-flow'
      },
      added: [
        'client/components/AddFriendsItems/AddFriendsItem.tsx',
        'client/components/AddFriendsPage/AddFriendsPage.tsx'
      ],
      removed: [],
      modified: [
        'client/apis/friends.ts',
        'client/index.tsx',
        'models/friends_models.ts',
        'server/db/dataBaseFunctions/friendsDB.test.ts',
        'server/db/dataBaseFunctions/friendsDB.ts',
        'server/db/seeds/2-friends.js',
        'server/routes/friends.test.ts',
        'server/routes/friends.ts'
      ]
    },
    {
      id: 'dbf923e15dca04ccd35d5e159bd481953d4d85a2',
      tree_id: '0b6508fe658145636f6ec9e5b3b49c14cb9fce1d',
      distinct: false,
      message:
        "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 5-As-a-user-I-would-like-to-keep-a-promise",
      timestamp: '2023-07-03T17:18:21+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/dbf923e15dca04ccd35d5e159bd481953d4d85a2',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [
        'client/components/AddFriendsItems/AddFriendsItem.tsx',
        'client/components/AddFriendsPage/AddFriendsPage.tsx'
      ],
      removed: [],
      modified: [
        'client/apis/friends.ts',
        'client/components/AddPromisePage/AddPromiseForm.tsx',
        'client/components/AddPromisePage/Animation.test.tsx',
        'client/components/UserProfileForm.tsx',
        'client/index.tsx',
        'models/friends_models.ts',
        'server/db/dataBaseFunctions/friendsDB.test.ts',
        'server/db/dataBaseFunctions/friendsDB.ts',
        'server/db/seeds/2-friends.js',
        'server/routes/friends.test.ts',
        'server/routes/friends.ts',
        'tailwind.config.js'
      ]
    },
    {
      id: 'b4d35d6b946cde26c5ab6cfa5914e0fd0989fb16',
      tree_id: 'a0302b5fbf2480bb03ee26e200b4ac68d5b1b1a4',
      distinct: false,
      message: 'removed absolute cause things went wrong somehow',
      timestamp: '2023-07-03T17:34:34+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/b4d35d6b946cde26c5ab6cfa5914e0fd0989fb16',
      author: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      committer: {
        name: 'Andrew',
        email: 'andrewjtrotter@gmail.com',
        username: 'andrew-trotter'
      },
      added: [],
      removed: [],
      modified: ['client/components/Header.tsx']
    },
    {
      id: '435f3e4aaa3cc248abca445db3719611cd8d7c43',
      tree_id: 'a0302b5fbf2480bb03ee26e200b4ac68d5b1b1a4',
      distinct: false,
      message:
        'Merge pull request #108 from kahikatea-2023/5-As-a-user-I-would-like-to-keep-a-promise\n\n5 as a user i would like to keep a promise',
      timestamp: '2023-07-03T17:41:41+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/435f3e4aaa3cc248abca445db3719611cd8d7c43',
      author: {
        name: 'Mikhail Robinson',
        email: '126931597+mikhail-robinson@users.noreply.github.com',
        username: 'mikhail-robinson'
      },
      committer: {
        name: 'GitHub',
        email: 'noreply@github.com',
        username: 'web-flow'
      },
      added: [],
      removed: [
        '.vscode/settings.json',
        'client/components/EditProfilePage.tsx',
        'settings.json'
      ],
      modified: [
        '.gitignore',
        'client/apis/promises.ts',
        'client/apis/user.ts',
        'client/components/App.tsx',
        'client/components/Header.tsx',
        'client/components/Promise/Promise.test.tsx',
        'client/components/Promise/Promise.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.tsx',
        'client/components/UserProfilePage.tsx',
        'models/pledge_models.ts',
        'server/db/dataBaseFunctions/promisesDB.test.ts',
        'server/db/dataBaseFunctions/promisesDB.ts',
        'server/db/dataBaseFunctions/usersDB.ts',
        'server/routes/friends.test.ts',
        'server/routes/promises.test.ts',
        'server/routes/promises.ts',
        'server/routes/users.test.ts',
        'server/routes/users.ts'
      ]
    },
    {
      id: '7771e5cf9bb2b292e1567610353797c7b0266470',
      tree_id: 'c4b9ca3b34d38c56603694f64d8b0c1b984f8766',
      distinct: true,
      message:
        "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 110-add-styling-animation",
      timestamp: '2023-07-03T17:58:56+12:00',
      url: 'https://github.com/kahikatea-2023/pinky-promise/commit/7771e5cf9bb2b292e1567610353797c7b0266470',
      author: {
        name: 'Rocio-Peralta',
        email: '1rocioperalta@gmail.com',
        username: 'rocio-peralta'
      },
      committer: {
        name: 'Rocio-Peralta',
        email: '1rocioperalta@gmail.com',
        username: 'rocio-peralta'
      },
      added: [
        'client/components/AddFriendsItems/AddFriendsItem.tsx',
        'client/components/AddFriendsPage/AddFriendsPage.tsx'
      ],
      removed: [
        '.vscode/settings.json',
        'client/components/EditProfilePage.tsx',
        'settings.json'
      ],
      modified: [
        '.gitignore',
        'client/apis/friends.ts',
        'client/apis/promises.ts',
        'client/apis/user.ts',
        'client/components/AddPromisePage/AddPromiseForm.tsx',
        'client/components/App.tsx',
        'client/components/Header.tsx',
        'client/components/Promise/Promise.test.tsx',
        'client/components/Promise/Promise.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx',
        'client/components/PromiseDetailPage/PromiseDetailPage.tsx',
        'client/components/UserProfileForm.tsx',
        'client/components/UserProfilePage.tsx',
        'client/index.tsx',
        'models/friends_models.ts',
        'models/pledge_models.ts',
        'server/db/dataBaseFunctions/friendsDB.test.ts',
        'server/db/dataBaseFunctions/friendsDB.ts',
        'server/db/dataBaseFunctions/promisesDB.test.ts',
        'server/db/dataBaseFunctions/promisesDB.ts',
        'server/db/dataBaseFunctions/usersDB.ts',
        'server/db/seeds/2-friends.js',
        'server/routes/friends.test.ts',
        'server/routes/friends.ts',
        'server/routes/promises.test.ts',
        'server/routes/promises.ts',
        'server/routes/users.test.ts',
        'server/routes/users.ts'
      ]
    }
  ],
  head_commit: {
    id: '7771e5cf9bb2b292e1567610353797c7b0266470',
    tree_id: 'c4b9ca3b34d38c56603694f64d8b0c1b984f8766',
    distinct: true,
    message:
      "Merge branch 'main' of github.com:kahikatea-2023/pinky-promise into 110-add-styling-animation",
    timestamp: '2023-07-03T17:58:56+12:00',
    url: 'https://github.com/kahikatea-2023/pinky-promise/commit/7771e5cf9bb2b292e1567610353797c7b0266470',
    author: {
      name: 'Rocio-Peralta',
      email: '1rocioperalta@gmail.com',
      username: 'rocio-peralta'
    },
    committer: {
      name: 'Rocio-Peralta',
      email: '1rocioperalta@gmail.com',
      username: 'rocio-peralta'
    },
    added: [
      'client/components/AddFriendsItems/AddFriendsItem.tsx',
      'client/components/AddFriendsPage/AddFriendsPage.tsx'
    ],
    removed: [
      '.vscode/settings.json',
      'client/components/EditProfilePage.tsx',
      'settings.json'
    ],
    modified: [
      '.gitignore',
      'client/apis/friends.ts',
      'client/apis/promises.ts',
      'client/apis/user.ts',
      'client/components/AddPromisePage/AddPromiseForm.tsx',
      'client/components/App.tsx',
      'client/components/Header.tsx',
      'client/components/Promise/Promise.test.tsx',
      'client/components/Promise/Promise.tsx',
      'client/components/PromiseDetailPage/PromiseDetailPage.test.tsx',
      'client/components/PromiseDetailPage/PromiseDetailPage.tsx',
      'client/components/UserProfileForm.tsx',
      'client/components/UserProfilePage.tsx',
      'client/index.tsx',
      'models/friends_models.ts',
      'models/pledge_models.ts',
      'server/db/dataBaseFunctions/friendsDB.test.ts',
      'server/db/dataBaseFunctions/friendsDB.ts',
      'server/db/dataBaseFunctions/promisesDB.test.ts',
      'server/db/dataBaseFunctions/promisesDB.ts',
      'server/db/dataBaseFunctions/usersDB.ts',
      'server/db/seeds/2-friends.js',
      'server/routes/friends.test.ts',
      'server/routes/friends.ts',
      'server/routes/promises.test.ts',
      'server/routes/promises.ts',
      'server/routes/users.test.ts',
      'server/routes/users.ts'
    ]
  }
}

const prisma = new PrismaClient()

async function main() {
  for (const commit of push.commits) {
    console.log(commit.author)
    await prisma.email.upsert({
      where: {
        email: commit.author.email
      },
      update: {
        name: capitalizeFirstLetter(
          firstName(firstName(commit.author.name), '-')
        ),
        email: commit.author.email
      },
      create: {
        name: capitalizeFirstLetter(
          firstName(firstName(commit.author.name), '-')
        ),
        email: commit.author.email
      }
    })
  }
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function firstName(str: string, separator = ' ') {
  return str.split(separator)[0]
}

main()
