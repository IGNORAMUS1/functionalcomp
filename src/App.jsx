import useFetch from './useFetch';
import ListComponent from './ListComponent';

function App() {
  const [data, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/posts');


  return (
    <>
      <ListComponent data={ data } isLoading={ isLoading } error={ error } />
    </>
  )
}

export default App
