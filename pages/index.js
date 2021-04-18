import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '@fontsource/sora/400.css';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';

export default function Home() {
  return (
    <Flex
      minH="100vh"
      p="0 0.5rem"
      direction="column"
      justify="center"
      align="center"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        p="5rem 0"
        flex="1"
        direction="column"
        justify="center"
        align="center"
      >
        <Heading m="0" lineHeight="1.15" fontSize="4rem" textAlign="center">
          Welcome to {''}
          <Link
            color="blue.500"
            textDecor="none"
            _hover={{ textDecor: 'underline' }}
            _focus={{ textDecor: 'underline' }}
            _active={{ textDecor: 'underline' }}
            href="https://nextjs.org"
          >
            Next.js!{' '}
          </Link>
        </Heading>

        <Text lineHeight="1.5" fontSize="1.5rem">
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </Text>

        <Box className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Heading>Documentation &rarr;</Heading>
            <Text>
              Find in-depth information about Next.js features and API.
            </Text>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Box>
      </Flex>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Flex>
  );
}
