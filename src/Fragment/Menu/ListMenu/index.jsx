import './style.css';

function ListMenu({ list }) {
  return (
    <ul className="menu-items">
      {list.map(item => (<li className="menu-item"><a key={item.id} href="#">{item.text}</a></li>))}
    </ul>
  )
}

export default ListMenu