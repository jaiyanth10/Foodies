//This is a client side component, its designed by next js like that because u can also use it for client side errors
'use client';
//This component will be exectued by next js
// uwill get an error props directly, which contains .code or .message
//which I am not using here
export default function Error({error}){
    return(
<main className="error">
    <h1>An error occured!</h1>
    <p>Failed to fetch data. Please try again!</p>
</main>
    );
}