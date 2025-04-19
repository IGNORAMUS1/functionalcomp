const ListComponent = ({ data, isLoading, error }) => {

    return ( 
        <div className="listsContainer">
            {isLoading && <p>Loading...</p>}
            { error && <p>{ error }</p>}
            { data && <ul>{
                data.map((post) => (
                    <li key={post.id}>
                        <h2>{ post.title }</h2>
                        <p>{ post.body }</p>
                    </li>
                ))}</ul>
            }
        </div>
     );
}
 
export default ListComponent;