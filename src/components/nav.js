export default function Nav(props){
    const { appName, links } = props;
    return(
        <nav>
            <a href="#">{ appName }</a>
            <button className="navbar-toggler navbar-toggler-icon"></button>
            <List links={ links } />
        </nav>
    )
}

const List = (props) => <ul> { props.links.map( (link, i) => 
    <li key={i} className="nav-item">
        <a className="nav-link" href={link.href}>{link.text}</a>
    </li>
    ) } 
</ul>