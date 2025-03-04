import type { NextPage } from 'next';
import Head from 'next/head';
import Writr from '../components/writr';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Writr | AI Copywriting</title>
                <meta
                    name="description"
                    content="Generate weird marketing texts using AI."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Writr></Writr>
        </div>
    );
};

export default Home;
