import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="https://www.linkedin.com/in/chukwuma-onuh-3ab374148/" target='_blank'>Linkedin</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="https://github.com/Chuks-Onuh" target = '_blank' >Github</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="https://drive.google.com/file/d/1PMosDJcNxPMqE5P7CoGLnifooErWR0nZ/view?usp=sharing" target = '_blank' >Resume</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        
        
      </ul>
    </div>
  );
}
