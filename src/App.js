import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cards from './components/Cards/Cards'
import './App.css';

const db = [
  {
    id:0,
    title: 'Front-End Development',
    desc: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.'
  },

{
  id:1,
  title: 'Front-End Development',
  desc: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.'
},

{
id:2,
title: 'Front-End Development',
desc: 'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.'
}

]

function App() {
  return (
    <div className="App">
      <Header  logo = {'Facebook'}/>
       <Main img = 'https://www.facebook.com/images/fb_icon_325x325.png'
        />
        <Cards db={db}/>
    </div>
  );
}

export default App;
