import React from "react";
import "./Ending.css"

function Ending() {
    const handleContact =()=>{
        window.location.href = 'mailto:dipeshdulal56@gmail.com?subject=Hello Dipesh &body=Hello, I would like to contact you.';
    
      }

  return (
    <div className="ending-container">
        <a href="https://github.com/ddkogit" target="_blank">

      <button className="git-button">
       <img src="./icons-github.svg" width={30} alt="visit github" />
       <span className="btn-text">
        Visit GitHub
        </span> 
      </button>
        </a>


<div className="contact-text">
<span>
    Start A Project
</span>

<span className="text-t">
    "Intrested in teaming up? Let's plan a time to have a conversation. Feel free to get in touch with me."
</span>

<button className="contact-btn" 
onClick={handleContact}>
  <span className="btn-text" >
      Contact Me
    </span>
</button>
</div>

<button className="logo">D</button>

<div>
    Learning everyday
</div>
<div>
    Developing everyday
</div>
<div className="button-list">

    <button>
        <img src="./icons-github.svg" width={40} alt="" />
    </button>
    <button>
        <img src="./icon-mail.png" width={40} alt="" />
    </button>
    <button>
        <img src="./icon-linkedin.svg" width={40} alt="" />
    </button>
    
    <button>
        <img src="./icon-contact.png" width={40} alt="" />
    </button>
  
</div>


<span>dipeshdulal56@gmail.com</span>
<span>+977 9805324144</span>
    </div>
  );
}

export default Ending;
