var ghpages = require('gh-pages');

ghpages.publish('build',
    { cname: 'elizabethrstephenson.com' },
    function (err) { console.error(err); }
);