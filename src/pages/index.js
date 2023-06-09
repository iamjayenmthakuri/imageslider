import Head from "next/head";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ImageSlider images={images} />
      </div>
    </>
  );
}

const images = [
  {
    id: 1,
    src: "/images/image1.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "./images/image2.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "./images/image3.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "./images/image4.jpg",
    alt: "Image 4",
  },
];
