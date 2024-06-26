import React from 'react';
import logo from '../img/Logo_v2.png';
import name from '../img/nome2.png';
import shopping_cart from '../img/shopping-cart.png';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from '../Components/AuthContext';

function Header({ handleGetCategoria }) {
  
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { user, setUser } = useAuth();
  
  //rederecionar para a página do carrinho
  const handleOnClickToCart = () => {
    window.location.href = './Cart';
  };

  //rederecionar para a página de sign in
  const handleOnClickToLog = () => {
    window.location.href = './Login';
  };

  //rederecionar para a página de sign up
  const handleOnClickToSign = () => {
    window.location.href = './CreateUser';
  };

  //rederecionar para a página inicial
  const handleOnClickToMain = () => {
    sessionStorage.setItem('categoria', '');
    window.location.href = './';
  };

  //rederecionar para a página do user
  const handleOnClickToUserPage = () => {
    window.location.href = './UserPage';
  };

  //fazer logout
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="headerMainPage">
      <div className="divLogoMainPage" onClick={handleOnClickToMain}>
        <img className="imgLogoMainPage" alt="Imagem da Página MainPage" src={logo} />
        <img className="imgNameMainPage" alt="Imagem da Página MainPage" src={name} />
      </div>
      <div className="divDropdownsMainPage">
        <Dropdown className="dropdownMainPage">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            RIDER
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleGetCategoria("Boots")}>Boots</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Men's Helmets")}>Men's Helmets</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Women's Helmets")}>Women's Helmets</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Men's Breeches")}>Men's Breeches</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Women's Breeches")}>Women's Breeches</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Belts")}>Belts</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdownMainPage">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            HORSE
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleGetCategoria("Saddle")}>Saddle</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Saddle Pads")}>Saddle Pads</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Tendon Boots")}>Tendon Boots</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Rugs")}>Rugs</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Bridles")}>Bridles</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdownMainPage">
          <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
            STABLE
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleGetCategoria("Forks")}>Forks</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Shovels")}>Shovels</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Hay nets")}>Hay nets</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetCategoria("Brooms")}>Brooms</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
      <div className="btnLog">
        <img className="imgShoppingCart" alt="Imagem do carrinho de compras" src={shopping_cart} onClick={handleOnClickToCart} />
        {isLoggedIn ? (
          <>
            <button className="buttonUser" onClick={handleOnClickToUserPage}>
              {user.person.nome}
            </button>
            <button className="buttonLogMainPage" onClick={handleLogOut}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="buttonSignMainPage" onClick={handleOnClickToSign}>
              Sign up
            </button>
            <button className="buttonLogMainPage" onClick={handleOnClickToLog}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header