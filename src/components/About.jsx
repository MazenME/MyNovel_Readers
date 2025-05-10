// src/pages/About.jsx
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="about-page" style={{ padding: "2rem" }}>
      <Helmet>
        <title>The Prophecy Of Shadows - Mazen Emad</title>
        <meta name="author" content="Mazen Emad Ramadan" />
        <meta
          name="description"
          content="Read The Prophecy Of Shadows chapters written by Mazen Emad Ramadan."
        />
        <meta property="og:title" content="The Prophecy Of Shadows - by Mazen" />
      </Helmet>

      <h1>About This Project</h1>
      <p>
        This website was built by <strong>Mazen Emad Ramadan </strong> the author of <strong>The Prophecy Of Shadows Novel</strong>, a
        passionate front-end developer who loves building practical web apps for
        real users.
      </p>

      <h2>Features:</h2>
      <ul>
        <li>Read chapters without logging in</li>
        <li>Chapter tracking and analytics</li>
        <li>Admin dashboard for managing content</li>
        <li>Commenting system coming soon (via Disqus)</li>
      </ul>

      <h2>Contact:</h2>
      <p>
        📧 Email:{" "}
        <a href="mailto:zeroapi42@gmail.com">zeroapi42@gmail.com</a>
        
      </p>
    </div>
  );
}
