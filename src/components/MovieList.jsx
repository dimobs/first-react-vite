import {useState} from "react";

export default function MovieList() {  
const [count, setCount] = useState(0);

const incrementClickHandler = () => {
    setCount(oldValue => oldValue + 1)
}


     return (
        <div className="movie-list">
        <h2>Count</h2>
        <h1>Стойност: {count}</h1>
        <button>-</button>
        <button onClick={incrementClickHandler}>+</button>
        </div>
     );
}

