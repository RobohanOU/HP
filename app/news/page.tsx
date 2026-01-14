import fs from 'fs';

export const getStaticProps = () => {
    const posts = fs.readdirSync('posts');
    console.log('files:', posts);
    return {
        props: {
            posts: [],
        },
    };
};

