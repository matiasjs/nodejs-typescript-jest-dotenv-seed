const fs = require('fs');

const dotenv = require('dotenv');

const testSetup = () => {
  process.stdout.write('\nSet testing environment variables: ');

  const rootEnvConfig = dotenv.parse(fs.readFileSync('.env.test'));

  for (const key in rootEnvConfig) {
    process.env[key] = rootEnvConfig[key];
    process.stdout.write(`${key}=${rootEnvConfig[key]}, `);
  }

  process.stdout.write('\n\n');
};

const path = require('path');

process.chdir(path.resolve(__dirname, '..'));

module.exports = testSetup;
