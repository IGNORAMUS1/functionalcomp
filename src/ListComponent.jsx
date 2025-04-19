const ListComponent = ({ data, isLoading, error }) => {

    return ( 
        <div className="listsContainer">
            {isLoading && <p>Loading...</p>}
            { error && <p>{ error }</p>}
            { data && <ul>{
                data.map((image) => (
                    <li key={image.id}>
                        <img src={image.url} alt={image.title} />
                    </li>
                ))}</ul>
            }
        </div>
     );
}
 
export default ListComponent;