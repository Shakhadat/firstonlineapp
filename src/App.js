import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div>
          <h1 className='headstyle'>Oleg Mapkob</h1>
          <ul className="navbar">
            <li><a href="#home" className="nav-item">Гланая</a></li>
            <li><a href="#home" className="nav-item">Обо мне</a></li>
            <li><a href="#home" className="nav-item">Связатсия</a></li>
           
          </ul>
          <div className="containerImg">
            <img src="./img/1.jpg" alt="jkj" />
            <img src="./img/2.jpg" alt="jkj" />
            <img src="./img/3.jpg" alt="jkj" />
            <img src="./img/4.jpg" alt="jkj" />
            <img src="./img/5.jpg" alt="jkj" />
            <img src="./img/6.jpg" alt="jkj" />
            <img src="./img/7.jpg" alt="jkj" />
            <img src="./img/8.jpg" alt="jkj" />
            <br />
            <img src="./img/9.jpg" alt="jkj" />
          </div>
        </div>
        <div className="footer">
          <p>© 2023 Олег Марков. Сайт создан на Wix.com.</p>
          <ul className="contactIcon">
            <li><button className="bg-dark text-white border-0 rounded"><ion-icon name="logo-facebook"></ion-icon></button></li>
            <li><button className="bg-dark text-white border-0 rounded"><ion-icon name="ellipsis-horizontal-circle-sharp"></ion-icon></button></li>
            <li><button className="bg-dark text-white border-0 rounded"><ion-icon name="logo-twitter" className="text-white"></ion-icon></button></li>
            <li><button className="bg-dark text-white border-0 rounded"><ion-icon name="logo-pinterest"></ion-icon></button></li>
          </ul>
        </div>
        

      </header>
      
    </div>
  );
}

export default App;
