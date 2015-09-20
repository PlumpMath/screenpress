'use strict';

import p from '../package.json';

export default function config() {
  return {
    // vital stats
    name: p.name,
    description: p.description,

    // launch environment
    port: process.env.PORT || 3000,
    assetHost: process.env.ASSET_HOST || 'http://localhost:3001',
  };
};
