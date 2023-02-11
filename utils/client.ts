import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'zxf19i5i',
    dataset: 'production',
    apiVersion: '2022-09-30',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});