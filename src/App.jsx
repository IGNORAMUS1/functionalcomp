import useFetch from './useFetch';
import './App.css'
import ListComponent from './ListComponent';

function App() {
  const [data, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/photos');


  return (
    <>
      <ListComponent data={ data } isLoading={ isLoading } error={ error } />
    </>
  )
}

export default App
