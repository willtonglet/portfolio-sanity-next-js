import sanityClient from '@sanity/client';

const writeClient = sanityClient({
    projectId: 'mt4m6u7e',
    dataset: 'production',
    token: process.env.SANITY_AUTH_TOKEN,
    useCdn: false
});

const readClient = sanityClient({
    projectId: 'mt4m6u7e',
    dataset: 'production',
    useCdn: true
});

export default { readClient, writeClient };
