import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className={`page`}>
        <Header />
        <Projects />
        <Footer />
      </div>
  );}
}

function Header() {
  return (
    <div className={`header`}>
      This is a placeholder for a portfolio website.
    </div>
  );
}

function Projects() {
  return (
    <div className={`project-container`}>
      Links to projects will go here.
      <SingleProject />
    </div>
  );
}

function Footer() {
  return (
    <div className={`footer`}>
      Footer
    </div>
  )
}

// -------------------------------------------

function SingleProject() {
  return (
    <div className={`project`}>
      <div className={`project-title`}>
        Project Title
      </div>
      <div className={`project-image`}>
        A representation of the project
      </div>
      <div className={`project-desc`}>
        A description of the project.
      </div>
      <div className={`project-link`}>
        Link to the project goes here.
      </div>
    </div>
  );
}

// -------------------- Export ----------------

export default App;
