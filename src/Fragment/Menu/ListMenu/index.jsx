import './style.css';

function ListMenu({ list }) {

  function clickLink (id){
    window.alert("Você clicou no link " + id);

  }
  return (
    <ul className="menu-items">
      {list.map(item => (<li className="menu-item" onClick={()=>clickLink(item.id + 1)}><a key={item.id} href="#">{item.text}</a></li>))}
    </ul>
  )
}

export default ListMenu