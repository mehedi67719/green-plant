
import { use } from 'react';
import { Authcontext } from '../authcontext/Authcontext';
import { Navigate, useLocation } from 'react-router-dom';

const Privaterouter = ({ children }) => {
    const { user, loader } = use(Authcontext);
    const location = useLocation(); 

    if (loader) {
        return <p>loading...</p>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default Privaterouter;
