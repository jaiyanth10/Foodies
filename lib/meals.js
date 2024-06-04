import fs from 'node:fs'; // fs api to handle file system in this project
import xss from "xss";// to prevent cross side scripting
import slugify from "slugify";//to convert some string to slug.
//The slugify filter returns a text into one long word containing nothing but lower case ASCII characters and hyphens 

import sql from "better-sqlite3";
const db = sql("meals.db"); //meals.db is database name
// fetching data

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 800)); //addidng this to create delay
  //all-multiple rows, get -single row, run - to insert
  return db.prepare("SELECT * FROM meals").all();
}

// Here’s a breakdown of how parameterized queries help protect against SQL injection:

// Placeholders (?): The ? in the query string is a placeholder for a parameter value.
//It indicates that a value will be safely inserted here.

// Binding Values: When you call .get(slug), the slug value is bound to the placeholder,
//and the database library ensures that it is treated as a value rather than a part of the SQL command.
//This prevents malicious input from being executed as SQL code.

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals where slug=?").get(slug);
}

  //this function will process data in  meals in database
  export async function processing_saving_Data(meal) {
    meal.slug = slugify(meal.title, { lower: true }); // Create slug from title
    meal.instructions = xss(meal.instructions); // Sanitize instructions
  
    const extension = meal.image.name.split('.').pop(); // Get file extension
    const fileName = `${meal.slug}.${extension}`; // Create file name
   
    const stream = fs.createWriteStream(`public/images/${fileName}`);// Define file path

    const bufferedImage = await meal.image.arrayBuffer(); // Get image buffer
  
    
      stream.write(Buffer.from(bufferedImage),(error)=>{// writing into the file
         if (error) {
          throw new Error('saving image failed'); // Handle error
      }});
  
    meal.image = `/images/${fileName}`; // Set image path

    db. prepare (`
      INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
      @title,
      
      @summary,
      
      @instructions,
      
      @creator,
      
      @creator_email,
      
      @image,
      
      @slug
      )
      `).run(meal);
  }