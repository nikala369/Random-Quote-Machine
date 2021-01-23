
import React from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState([]);
  const [color, setColor] = React.useState("rgb(138, 220, 378)");
  const [opacity, setOpacity] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();


      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randomIndex])
    }
    fetchData();

  
  }, []);

  const getNewQuote = () => {

    const colors = [
      "#9A4545",
      "#92BC91",
      "#5893AB",
      "#FF6433",
      "#FF8A33",
      "#FFB833",
      "#383C28",
      "#2C2B45",
      "#157015",
      "#8786B3",
      "#765F78",
      "#33DBFF",
      "#132025",
      "#5433FF",
      "#BE33FF",

    ];

    const styling = {
      
      opacity: 0,
    }

    let randIndex = Math.floor(Math.random() * quotes.length);
    let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuotes(quotes[randIndex])
    setColor(colors[randColorIndex])
    setOpacity(styling[opacity])
    
  }

  return (
    <div style={{backgroundColor: color, minHeight: "100vh", transition: 'all 0.5s'}}>
      <div className="card-header1">Inspirational Quotes</div>
        <div className="container pt-5">
          <div className="style-jumbo">
                {randomQuotes ? (
                    <>    
                    <h5 style={{color: color, transition: 'all 0.8s', textAlign: 'center'}}    className="card-title">- {randomQuotes.author || "No author"}</h5>  
                    <p className="font-styling" style={{opacity}} style={{color: color, transition: 'all 1.1s', backgroundPosition: '100%, 100%', fontSize: '25px', textAlign: 'center'}} className="card-text"><span className="first-span">&quot;</span>{randomQuotes.text}</p>
                    </>
                ) : (
                  <h2>Loading</h2>
                )}

                <div className="flexing-buttons">
                  <div>
                  <button style={{backgroundColor: color, transition: 'all 0.6s', border: color}} className="btn btn-primary ml-3 button-styling" onClick={getNewQuote}>New Quote</button>
                  </div>
                  <div>
                  <a style={{backgroundColor: color, transition: 'all 0.6s', border: 'none'}} href={
                    "https://twitter.com/intent/tweet/hashtags?quotes&related=freecodecamp&text=" + encodeURIComponent (
                      '"' + randomQuotes.text + '" ' + randomQuotes.author 
                    )
                    } target="_blank" className="btn btn-warning link1"><i className="fa fa-twitter logo-style"></i></a>
                  <a style={{backgroundColor: color, transition: 'all 0.6s', border: 'none'}}  href="https://www.tumblr.com/explore/trending" target="_blank" className="link2 btn btn-danger"><i className="fa fa-tumblr"></i></a>
                  </div>
                </div>
          </div>
          

          {quotes.map(quote => (
            <div>{quotes.text}</div>
          ))}
        </div>
    </div>


  );
}


export default App;