"use server"; //making these below functions server side functions/actions
// server side functions should be async
import {processing_saving_Data} from "./meals"
import { redirect } from "next/navigation";
export async function saveToDatabase(formdata) {
  //formdata will come automatically

  const meal = {
    title: formdata.get("title"), //using get u can pass name key of input and get value
    summary: formdata.get("summary"),
    instructions: formdata.get("instructions"),
    image: formdata.get("image"),
    creator: formdata.get("name"),
    creator_email: formdata.get("email"),
  };
  //function for processing and saving melas data in db
  await processing_saving_Data(meal);
  redirect('/meals');
}


