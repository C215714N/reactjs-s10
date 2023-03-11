import { NavLink } from "react-router-dom";
export default function Nav(props){
    const { url, appName, links, action } = props;
    return(
        <nav className="navbar navbar-dark navbar-expand-md | bg-dark bg-gradient | px-3 sticky-top">
            <a href="#" className="navbar-brand">{ appName }</a>
            <button className="navbar-toggler navbar-toggler-icon"></button>
            <List links={ links } action={action} url={url} />
        </nav>
) }

const List = (props) => {
const { url, action, links} = props;
return(
<ul className="navbar-nav navbar-collapse"> { links.map( (link, i) => 
    <li key={i} className="nav-item">
        <NavLink to={link.href} onClick={() => action(url + link.href)} className="nav-link">
            <span className={ "pe-2 | " + link.className }></span>
            {link.text}
        </NavLink>
    </li> 
    ) } 
</ul> 
) }