import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Color",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMHN0eWxpc3R8ZW58MHx8MHx8fDA%3D",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Blow Dry",
    img: "https://images.unsplash.com/photo-1562259920-47afc3030ba2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFpciUyMHN0eWxpc3R8ZW58MHx8MHx8fDA%3D",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Hair Cut",
    img: "https://media.istockphoto.com/id/2152673203/photo/hairstylist-cutting-on-wet-hair-with-professionalism-and-precision.webp?a=1&b=1&s=612x612&w=0&k=20&c=noDNjjAlh7ewMw2APGx-hm8zymY-fKOHJ_SvxXzD3ak=",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Style",
    img: "https://images.unsplash.com/photo-1612690207805-a3c172ea6e8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhaXIlMjBzdHlsaXN0fGVufDB8fDB8fHww",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  return <section ref={ref}>
    <div className="container">
        <img src="" alt="" />
        .
    </div>
  </section>;
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    targe: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
