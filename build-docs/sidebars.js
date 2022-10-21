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
      type: 'category',
      label: 'Build guide',
      link: {
        type: 'generated-index',
      },
      items: [
        'build-guide/board-setup',
        'build-guide/host-bootstrapping',
        'build-guide/check-env',
        'build-guide/management-cluster',
        'build-guide/mvm-cluster',
        'build-guide/demo-build',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
      },
      items: [
        'troubleshooting/flintlock',
        'troubleshooting/microvm',
        'troubleshooting/capmvm',
      ],
    },
  ],
};

module.exports = sidebars;
