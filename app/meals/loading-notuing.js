import classes from './loading.module.css';

export default function MealsLoadingPage(){
    return <p className={classes.loading}>Loading...</p>
}

//This is a loading page, ucan add this any where in the app folder, next js will directly detect and show it as fallback 
//text when its fetching data from backend. But to be logical add it in the folder where  u are really fetching data. here its meals folder.

//In this project I am using alternative of loading.js, which is suspense, 
//which oinly loadinds the data fetching part instead of whole page, ref: video:433