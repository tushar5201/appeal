import { Link } from "react-router-dom";

export default function AboveHeader() {
    return(
        <div className="above-header-main">
            <div className="container">
                <Link className="above-link" to="/">appeal.ecology@gmail.com</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link className="above-link" to="/">+91 93169 30971</Link>
            </div>
        </div>
    )
}