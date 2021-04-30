import "./HmeBody.css";
import Draw from "./img/Draw.png";
import WhiteShirt from "./img/WhiteShirt.png";
import Puzzle from "./img/Puzzle.png";
import Students1 from "./img/Students1.png";
import Brain from "./img/Brain.png";
import RedDress from "./img/RedDress.png";
import Team from "./img/Team.png";
import Annie from "./img/Annie.png";
import Atom from "./img/Atom.png";
import Star1 from "./img/Star1.png";

function HmeBody() {
  return (
    <div className="HmeBody">
      <h3>
        Teaching kids programming and digital skills is{" "}
        <font font-style="italic">MORE</font> than just writing code.{" "}
      </h3>
      <div className="Img1">
        <img className="WhiteShirt" src={WhiteShirt} alt="WhiteShirt" />
        <img className="Draw" src={Draw} alt="Ideas" />
        <h4 className="Img1h4">
          Creativity <br />& Individuality
        </h4>
      </div>
      <div className="Img2">
        <img className="Puzzle" src={Puzzle} alt="Puzzle" />
        <img className="Brain" src={Brain} alt="Brain" />
        <h4 className="Img2h4">
          Critical Thinking <br />& Problem Solving
        </h4>
      </div>
      <div className="Img3">
        <img className="RedDress" src={RedDress} alt="RedDress" />
        <img className="Team" src={Team} alt="Team" />
        <h4 className="Img3h4">
          Communication <br />& Collaboration
        </h4>
      </div>
      <div className="Img4">
        <img className="Annie" src={Annie} alt="Annie" />
        <img className="Atom" src={Atom} alt="Atom" />
        <h4 className="Img4h4">
          Technology <br />& Future Focus
        </h4>
      </div>
      <div className="BodyComp">
        <h2 className="h22">How our programme helps teachers and schools</h2>
        <button className="LP">LEARNING PATHWAYS</button>
        <button className="DT">DIGITAL TECHNOLOGIES</button>
        <button className="KC">KEY COMPETENCIES</button>
        <button className="IR">IR4.0</button>
        <div className="CompBox">
          <h4 className="Header1">Enhance key competencies</h4>
          <p className="Header1p">
            The programme enhances capabilities of students in the 5 Key
            Competencies identified in the New Zealand Curriculum:
          </p>
          <div>
            <img className="Star1" src={Star1} alt="Star1" />
            <h5 className="h5a">THINKING</h5>
            <p className="para1">
              In particular the programming focused on problem solving, design
              thinking and computational thinking.
            </p>
          </div>

          <div className="grp2">
            <img className="Star2" src={Star1} alt="Star1" />
            <h5 className="h5b">DISCERNING CODES</h5>
            <p className="para2">
              Analysing language, symbols, and texts in order to understand and
              make sense of the codes in which knowledge is expressed.
            </p>
          </div>

          <div className="grp3">
            <img className="Star3" src={Star1} alt="Star1" />
            <h5 className="h5c">SELF-MANAGEMENT</h5>
            <p className="para3">
              Projects and challenges are designed to motivate students to
              explore and experiment with self-motivation.
            </p>
          </div>

          <div className="grp4">
            <img className="Star4" src={Star1} alt="Star1" />
            <h5 className="h5d">RELATIONSHIPS WITH PEERS</h5>
            <p className="para4">
              The programme is designed with unplugged sessions where students
              interact in a range of different situations, including things like
              being able to listen well, recognise different <br></br>points of
              view, and share ideas
            </p>
          </div>
          <div className="grp5">
            <img className="Star5" src={Star1} alt="Star1" />
            <h5 className="h5e">PARTICIPATION AND COLLABORATION</h5>
            <p className="para5">
              The programming encourages students to be involved in communities,
              such as family, whanau, school, and contribute and make
              connections with people.
            </p>
          </div>
        </div>
        <div>
          <img className="Students1" src={Students1} alt="Students1" />
          <h2 className="h2Last">What are you waiting for?</h2>
          <h4 className="h4Last">Start teaching Digital Technologies today.</h4>
          <p className="pLast1">
            If you need more information, we are happy to answer any questions
            you may have.
          </p>
          <button className="Button3">ENQUIRE NOW</button>
          <button className="Button4" background-color="pink" border="none">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default HmeBody;
