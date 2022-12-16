/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    'shopping-list',
    {
      type: 'link',
      label: 'Build guide',
      href: 'https://weaveworks-liquidmetal.github.io/site/docs/category/fun-raspberry-pi-homelab/',
    },
    'demo-build',
  ],
};

module.exports = sidebars;
