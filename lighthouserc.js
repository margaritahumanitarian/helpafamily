module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn dev',
      url: ['http://localhost:3000'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
