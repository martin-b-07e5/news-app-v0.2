import { Link } from "react-router-dom";

export function MyNavBarComponent() {
  return (
    <div className="myNabvar--pendingStyle">
      <nav>
        <ul>
          <li>
            <img src="favicon.ico" alt="MB " width="24px" height="auto"></img>
            <Link to="/aboutUs">About me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
