
var soljsonSources = [
  "soljson-v0.8.4-broken_alpha.js",
  "soljson-v0.7.6.js",
  "soljson-v0.7.6+commit.3b061308.js",
  "soljson-v0.6.12.js",
  "soljson-v0.5.16.js"
];
var soljsonReleases = {
  "0.7.6": "soljson-v0.7.6.js",
  "0.7.6+commit.3b061308": "soljson-v0.7.6+commit.3b061308.js",
  "0.6.12": "soljson-v0.6.12.js",
  "0.5.16": "soljson-v0.5.16.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
