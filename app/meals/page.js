import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";//importing method which fetch data

//creating a new component in this file itself :ref ved:433
//no need of exports or imports as in same file
async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}


export default  function MealsPage() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favorite Reciepe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
        <Meals />
        </Suspense>
      </main>
    </>
  );
};


