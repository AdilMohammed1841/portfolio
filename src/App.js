import './App.css';
import NavBar from './components/navbar/navBar';
import { useRef, useState } from 'react';
import Layout from './components/layout/layout';
import Profile from './components/profile/profile';
import Details from './components/details/details';

function App() {
  const profileref = useRef(null);
  const detailsref = useRef(null);
  // const [ action, setAction ] = useState('')
  const refObj = {
    profileref:profileref,
    detailsref:detailsref
  } 

  const handleScroll = (ref) => {
    const referance = refObj[ref];
    window.scrollTo({
      top: referance.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Layout scrollHandler={handleScroll} >
        <div className="components">
          <div ref={profileref} >
            <Profile  />
          </div>
          <div ref={detailsref} >
            <Details  />
          </div>
          <Details  />
          <Details  />
          <Details  />
          <Details  />
        </div>
      </Layout>   
    </div>
  );
}

export default App;
