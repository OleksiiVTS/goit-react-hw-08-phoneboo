import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  return (
    <div>
      <Link to={location.state?.from ?? '/'}>&#129044; Go back</Link>
      <h1>Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
