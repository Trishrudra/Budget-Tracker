import "../App/app.css";
import "../../global.css";

function App() {
  return (
    <div className="App">
      <header>
        <p className="heading raleway">Budjet Tracker</p>
        <section className="links">
          <a className="Dashboard Link raleway" href="">
            Dashboard
          </a>
          <button className="sign_in_home button raleway">Sign In</button>
          <button className="sign_up_home button raleway">Sign Up</button>
        </section>
      </header>
      <main>
        <section className="header_section">
          <p className="header_section_heading raleway">Budget tracking</p>
          <p className="header_section_span raleway">made easy.</p>
          <p className="header_section_text raleway">
            Now, you can easily keep track of expenses and subscriptions all
            from one website — making budgeting smarter, faster, and stress,
            free.
            <br />
            <br />{" "}
            <span>
              ----------------------------- One login, total control.
              ------------------------------
            </span>
          </p>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
