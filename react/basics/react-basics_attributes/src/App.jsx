import "./App.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Heading</h2>
      <label htmlFor="question">Is this a question</label>
      <input id="question"></input>

      <a href="https://react.dev/">Click here</a>
    </article>
  );
}
