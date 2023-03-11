import { NavLink } from "react-router-dom";
export default function Nav(props){
    const { url, appName, links, action, users, setUsers } = props;
    return(
        <nav>
            <a href="#">{ appName }</a>
            <button onClick={async() => {
                action(url +"users?id=1"); 
                await console.log(users)
                }}>
                consultar usuarios
            </button>
            <List links={ links } />
        </nav>
) }

const List = (props) => <ul> { props.links.map( (link, i) => 
    <li key={i} className="nav-item">
        <NavLink to={link.href}> <span className={ link.className }></span> {link.text}</NavLink>
    </li>
    ) } 
</ul>