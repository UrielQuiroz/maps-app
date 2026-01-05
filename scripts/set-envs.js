
const { writeFileSync, mkdirSync } = require( 'fs' );

require( 'dotenv' ).config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const mapbokKey = process.env['MAPBOX_KEY']

if( !mapbokKey ) {
  throw new Error('MAPBOX_KEY is not set');
}

const envFileContent = `
  export const environment = {
    mapboxKey: "${ mapbokKey }",
  };
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync( targetPath, envFileContent );
writeFileSync( targetPathDev, envFileContent );
