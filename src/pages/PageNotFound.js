import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="text-center">
      <h4>Page Not Found!</h4>
      <Link to="/">Home</Link>
    </div>
  )
}

export default PageNotFound
