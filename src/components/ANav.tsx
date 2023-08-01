import { Link, useNavigate } from 'react-router-dom';

export default function ANav() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/sign-in");
    }

    return (
        <nav>
            <ul>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/admin/user">User</Link></li>
                <li><Link to={``} onClick={handleLogout}>Log Out</Link></li>
            </ul>
        </nav>
    );
}