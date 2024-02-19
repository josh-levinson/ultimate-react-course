import "./App.css";

const skills = [
  {
    name: "Ruby on Rails",
    level: "advanced",
    color: "#cf6196",
  },
  {
    name: "React.js",
    level: "intermediate",
    color: "#7bc97f",
  },
  {
    name: "AWS",
    level: "intermediate",
    color: "#bec97b",
  },
  {
    name: "Linux",
    level: "beginner",
    color: "#5a86ed",
  },
];
function App() {
  return (
    <main>
      <Photo />
      <div className="container">
        <Name />
        <Summary />
        <div className="skills">
          {skills.map((skill) => (
            <Skill name={skill.name} color={skill.color} level={skill.level} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Photo() {
  return <img src="./yousure.png" alt="Are you sure about that?" />;
}

function Name() {
  return <h2>Josh Levinson</h2>;
}

function Summary() {
  return (
    <p>
      Full-stack developer who specializes in Ruby on Rails and is also
      attempting to learn React in this course. I also enjoy video games, bike
      riding, and the beach. I live in New Haven, CT.
    </p>
  );
}

function Skill({ name, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {name}
      <span>
        {level === "advanced" && "😃"}
        {level === "intermediate" && "😜"}
        {level === "beginner" && "🥶"}
      </span>
    </div>
  );
}

export default App;
