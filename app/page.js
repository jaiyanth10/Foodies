
import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow.js";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
    
      <header className={classes.header}>
        <div className={classes.slideshow}>
        <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Foodies: Where Taste Meets Adventure</h1>
            <p>Share, discover, and savor recipes from around the globe.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join Our Tasty Community</Link>
            <Link href="/meals">browse flavors</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            Foodies is your passport to a world of culinary delight. Post your
            recipes, discover new dishes, and connect with fellow food
            enthusiasts.
          </p>
          <p>
            Whether you're a seasoned chef or a kitchen newbie, Foodies is the
            perfect place to find inspiration and share your gastronomic
            creations.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Choose Foodies?</h2>
          <p>
            At Foodies, we believe that food is more than just sustenance—it's
            an adventure. Our platform allows you to explore a diverse range of
            recipes, from family classics to exotic dishes.
          </p>
          <p>
            Join Foodies to connect with a vibrant community of food lovers,
            share your culinary masterpieces, and find endless inspiration for
            your next meal.
          </p>
        </section>
      </main>
    </>
  );
}
