import type { NextPage } from 'next';
import { Html } from 'next/document';
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
                    content="Generate weird texts using AI."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Writr></Writr>

            <footer className={styles.footer}>
                <a
                    href="https://openai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by OpenAI
                </a>
            </footer>
        </div>
    );
};

export default Home;
