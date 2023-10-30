export default function MovieList(props) {  

     return (
        <div className="movie-list">
        <h2>{props.children}</h2>
        <h2>{props.secondaryText}</h2>
        <h2>{props.headingText}</h2>
        <p>{5 * '5'}</p>

        <ul>
        <li>First Movie</li>
        <li>second Movie</li>
        <li>Thrid Movie</li>
        <li>Four Movie</li>
        </ul>
        </div>
     );
}

