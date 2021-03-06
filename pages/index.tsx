import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import ProDisplayXDROptions from "../public/ProDisplayXDR-Options.png";
import ProDisplayXDRPanel from "../public/ProDisplayXDR-Panel.png";

const chaos =
  "https://player.vimeo.com/video/671208512?h=c8e89d1b24&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
const ui =
  "https://player.vimeo.com/video/671219052?h=80261ada6e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
const VideoPlayer = ({ url }: { url: string }) => (
  <>
    <iframe
      className={styles.video}
      src={url}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="FaceLight"
    ></iframe>
    {/* <Script src="https://player.vimeo.com/api/player.js"></Script> */}
  </>
);

const Icon = () => (
  <a href="https://testflight.apple.com/join/F5RKhfn9">
    <Image
      src="/Icon512~mac.png"
      alt="FaceLight Icon shows a geometric face looking into a bright screen"
      width={128}
      height={128}
    />
    <p>Join TestFlight</p>
  </a>
);

const RetinaImage = ({ src }: { src: StaticImageData }) => (
  <Image src={src} width={src.width / 2} height={src.height / 2} />
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FaceLight for macOS</title>
        <meta
          name="description"
          content="Turns your Mac's XDR screen into a video light"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>FaceLight</h1>
        <p className={styles.description}>
          Turn your Mac&rsquo;s XDR screen into a video light!
        </p>
        <VideoPlayer url={chaos} />
        <p></p>
        <p>
          This is what the UI looks like (screen recording doesn&rsquo;t show
          how darn bright it is)
        </p>
        <VideoPlayer url={ui} />
        <p>Would you like to try it?</p>
        <Icon />
        <p>
          Works with MacBook Pro with M1 Pro or Pro Max, or any Mac connected to
          a Pro Display XDR.
        </p>
        <section>
          <h2>FAQ</h2>
          <dl>
            <dt>
              I have a Pro Display XDR, but Facelight is no brighter than other
              white areas on screen!
            </dt>
            <dd>
              Make sure you have the right profile selected!
              <br />
              <RetinaImage src={ProDisplayXDRPanel} />
              <br />
              <RetinaImage src={ProDisplayXDROptions} />
            </dd>
          </dl>
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="https://darknoon.com">Built by Andrew Pouliot.</a>
      </footer>
    </div>
  );
};

export default Home;
