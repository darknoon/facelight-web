import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const VideoPlayer = () => (
  <>
    <iframe
      className={styles.video}
      src="https://player.vimeo.com/video/671208512?h=c8e89d1b24&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="FaceLight"
    ></iframe>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </>
);

const Icon = () => (
  <a href="/download">
    <Image
      src="/Icon512~mac.png"
      alt="FaceLight Icon shows a geometric face looking into a bright screen"
      width={128}
      height={128}
    />
    <p>Download alpha 1</p>
  </a>
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FaceLight for macOS</title>
        <meta
          name="description"
          content="Turns your mac's XDR screen into a video light"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>FaceLight</h1>

        <p className={styles.description}>
          Turn your mac's XDR screen into a video light!
        </p>

        <VideoPlayer />

        <Icon />

        <p>
          Works with MacBook Pro with M1 Pro or Pro Max, or any Mac connected to
          a Pro Display XDR.
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://darknoon.com">Built by Andrew Pouliot</a>
      </footer>
    </div>
  );
};

export default Home;
