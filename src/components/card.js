import List from './list';

const Card = (props) => 
<div className={'card m-2 ' + props.className}>
    <h3 className='card-header'>{props.title}</h3>
    <List data={props.data} />
</div>

export default Card;