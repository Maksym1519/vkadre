module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "qvzhaz3eudw3049sqyxaea1roity4x2w5a6u8kcfi00re4t3y6nauq8eog5rd9z6", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "vkadre", // the neon project under wich your DB runs
        neonRole: "flying1519", // create it manually under roles for your project first
        //(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      }
    },
  }