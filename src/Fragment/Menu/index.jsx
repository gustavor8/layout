import ListMenu from "./ListMenu";
import UserInfo from "./UserInfo";
import './style.css';

function Menu() {
  const menuItems = [
    {id: 0, text: "Link 1"},
    {id: 1, text: "Link 2"},
    {id: 2, text: "Link 3"},
  ];

  return (
    <div className="menu">
      <UserInfo userName="User Name"/>
      <ListMenu list={menuItems}/>
    </div>
  )
}

export default Menu;