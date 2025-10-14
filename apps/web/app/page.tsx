import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div>
      <Button size="lg" asChild>
        <h1 className="text-3xl text-red-400 ">hello worldf</h1>
      </Button>
    </div>
  );
}
