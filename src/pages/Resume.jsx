// import resumePDF from '../assets/johndinhresume2025.pdf';
import Card from "../components/Card";
import "./Resume.css";

export default function Resume() {
    return (
      <div>
      <div className="resume-buttons">
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          <button>View Resume</button>
        </a>
        <a href={resumePDF} download="John_Dinh_Resume.pdf">
          <button>Download Resume</button>
        </a>
      </div>

      <div className="Skills">
          <h2>Skills / Experience</h2>
          <div className="card-container">
            <Card title="HTML" image="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg" content="HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure of a webpage, allowing you to define elements such as headings, paragraphs, links, assets, and more. With HTML, you can create well-structured and accessible web content." />
            <Card title="CSS" image="https://res.cloudinary.com/cloudinary-marketing/images/c_fill,w_807/f_auto,q_auto/v1649718594/Web_Assets/blog/working_with_css_22218720ab/working_with_css_22218720ab-jpg?_i=AA" content="CSS (Cascading Style Sheets) is used to style and layout web pages. It allows you to apply styles to HTML elements, such as colors, fonts, spacing, and positioning. CSS makes it possible to create visually appealing and responsive web designs that work across different devices and screen sizes." />
            <Card title='JavaScript' image='https://di3xp7dfi3cq.cloudfront.net/media/magefan_blog/Free_Courses_to_learn_JavaScript.jpg' content='JavaScript is a versatile and popular programming language used for creating interactive and dynamic web content. It is primarily used for client-side scripting, enabling you to add interactivity, animations, and dynamic behavior to web pages. JavaScript is also used for server-side development with Node.js.' />
            <Card title="React" image="https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FiCfQnsFQzuzB7S8bLbxECrVk&width=828" content="React is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, React allows you to create reusable UI components and manage the state of your application efficiently. It uses a virtual DOM to optimize rendering and improve performance." />
            <Card title="Node.js" image="https://blog.logrocket.com/wp-content/uploads/2020/02/image-processing-with-node-and-jimp.png" content="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, enabling you to build scalable and high-performance web applications. Node.js is known for its non-blocking, event-driven architecture, making it ideal for real-time applications." />
            <Card title="Express" image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*7fe7SkSNP6Y8PvTRm4Jl6Q.png" content="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of handling HTTP requests, routing, and middleware, allowing you to create RESTful APIs and web applications quickly and efficiently." />
            <Card title="PostGreSQL" image="https://cdn.thenewstack.io/media/2021/10/84b1b2cf-postgreselepantwbg.png" content="PostgreSQL is a powerful, open-source relational database management system (RDBMS) known for its robustness, scalability, and compliance with SQL standards. It supports a wide range of data types and advanced features such as complex queries, foreign keys, triggers, views, and transactional integrity." />
            <Card title='TypeScript' image='https://miro.medium.com/v2/resize:fit:1400/1*pa7myCN0_w96c59ldW8EKw.png' content='TypeScript is a superset of JavaScript that adds static typing and other features to the language. It helps catch common errors and improve code quality by providing type checking during development. TypeScript is widely used for building large-scale applications and is supported by popular frameworks like Angular and React.' />
            <Card title='MongoDB' image='https://miro.medium.com/v2/resize:fit:1200/1*QJnvahq_EBdUGjYQUYrhvA.png' content='MongoDB is a popular NoSQL database known for its flexibility, scalability, and ease of use. It stores data in flexible, JSON-like documents and supports dynamic schemas, making it ideal for handling unstructured and evolving data. MongoDB is widely used for web applications, content management systems, and real-time analytics.' />
            <Card title='Sequelize' image='https://miro.medium.com/v2/resize:fit:661/1*TkP2EwaX95ItAv_jGS7hSA.png' content='Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It provides a simple and powerful way to interact with relational databases using JavaScript objects, making it easier to perform CRUD operations, manage database relationships, and handle migrations. Sequelize is widely used in Node.js applications for data modeling and persistence.' />
            <Card title='RESTful APIs' image='https://www.spaceotechnologies.com/wp-content/uploads/2023/05/What-is-a-RESTful-API.png' content='REST (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods like GET, POST, PUT, DELETE to perform CRUD operations on resources. RESTful APIs are stateless, scalable, and easy to maintain, making them ideal for building web services and microservices.' />
            <Card title='Git' image='https://engineering.procore.com/content/images/2016/11/git-logo.png' content='Git is a distributed version control system used for tracking changes in source code during software development. It allows multiple developers to collaborate on a project, manage code versions, and track changes over time. Git is known for its speed, efficiency, and support for branching and merging workflows.' />
            <Card title='Mongoose' image='https://miro.medium.com/v2/resize:fit:648/1*iDvsmUwzZQxJSKdL0xzwIA.png' content='Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a simple and elegant way to define schemas, perform CRUD operations, and interact with MongoDB databases using JavaScript objects. Mongoose simplifies data validation, querying, and relationships in MongoDB applications.' />
            <Card title="Python" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8h_BUGp_0Yxt_QUeBeMu32g4kvJ6deNMW5g&s" content="Python is a versatile, high-level programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used for web development, data analysis, artificial intelligence, scientific computing, and more." />
            <Card title="GraphQL" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" content="GraphQL is a query language and runtime for APIs that enables clients to request only the data they need. It provides a flexible and efficient alternative to RESTful APIs by allowing clients to specify the structure of the response. GraphQL is widely used for building data-driven applications and is supported by popular frameworks like Apollo and Relay." />
            <Card title="C" image="https://miro.medium.com/v2/resize:fit:1400/1*0D9zGIQXQEIZFYD9tpRXgQ.png" content="C is a general-purpose, procedural programming language developed by Dennis Ritchie in the early 1970s. It is known for its efficiency, portability, and low-level access to system resources. C is widely used for system programming, embedded systems, and developing operating systems and applications." />
          </div>

      </div>  

      </div>
      
    );
  }