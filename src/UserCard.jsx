import React from "react";
const UserData = [
  {
    name: "james",
    city: "Chennai",
    description: "Front End Developer",
    skills: ["Html", "Css", "Vue Js", "React Js", "Node Js", "Sql", "Java"],
    online: true,
    profile: "/img1 (2).jpg",
  },
  {
    name: "Sanjana",
    city: "Delhi",
    description: "Back End Developer",
    skills: ["Html", "Css", "Vue Js", "React Js", "Node Js", "Sql", "Java"],
    online: false,
    profile: "/public/img2.jpg",
  },
  {
    name: "Gowtham A V",
    city: "Bengaluru",
    description: "Software Developer",
    skills: ["Html", "Css", "Vue Js", "React Js", "Node Js", "Sql", "Java"],
    online: false,
    profile: "/public/img3.jpg",
  },
];

function User(props) {
  return (
    <>
      <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>
          {props.online ? "ONLINE" : "OFFLINE"}
        </span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description} </p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary outline">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const UserCard = () => {
  return (
    <div className="cards">
      {/* <User name="James" city="New zealand" description="Front-end Developer" skills={["Html","Css","Javascript","React Js","Node Js","Java"]} online={true} profile="img1 (2).jpg" ></User> */}

      {UserData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          online={user.online}
          profile={user.profile}
          skills={user.skills}
        ></User>
      ))}
    </div>
  );
};

export default UserCard;
