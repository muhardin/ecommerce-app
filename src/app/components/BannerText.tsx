import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";

interface Props {
  title: string;
  content?: string;
  href?: string;
}
const BannerText = ({ title, content, href }: Props) => {
  return (
    <div className="sm:inline-block lg:inline-block absolute top-0 left-2 sm:left-4 w-full h-full">
      <Container className="flex h-full flex-col gap-y-2 sm:gap-y-6 justify-center items-start">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-7xl font-bold text-white">
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-lg text-slate-100 flex-wrap w-1/2">
          {content ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            "Stock up on sportswear and limited edition collections"
          )}
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-4 mt-1 sm:mt-2">
          {/* <button className="p-2 sm:py-3 text-xs sm:px-6 rounded-full bg-slate-200 hover:bg-white duration-200 sm:text-sm uppercase font-semibold">
            Find out more
          </button> */}
          {href ? (
            <Link
              href={href}
              className="p-2 px-2 sm:py-3 text-xs sm:px-6 rounded-md bg-slate-200 hover:bg-white duration-200 sm:text-sm uppercase font-semibold flex flex-row justify-center items-center">
              Go Now
            </Link>
          ) : null}
        </motion.div>
      </Container>
    </div>
  );
};

export default BannerText;
