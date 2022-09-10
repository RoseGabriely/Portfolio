import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <section class="title">Rose's Portfolio</section>
        <header>
          <h1>Rose Gabriely</h1>
          <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="projects.html">Projects</a>
          </nav>
        </header>
        <section class="page">
          <section class="about">
            <div class="bigImage"></div>
            <div class="bio">
              <h2 class="name">About</h2>
              <p class="journey">
                This is a portfolio of my solo projects, along with projects I
                worked on with various teams during my schooling. They include
                front-end, back-end and full-stack work in React and Node which
                also incorporate other libraries and frameworks.
              </p>
            </div>
          </section>
          <footer>
            <p class="question">Like what you see?</p>
            <button class="contact">Contact Me</button>
          </footer>
        </section>
      </body>
    </div>
  );
}

export default App;
