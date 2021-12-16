import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, setQuestion] = useState(data);

  return(
    <main>
      <div className="container">
        <h3>Question  And Answer ABout Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}></SingleQuestion>
          })}
        </section>
      </div>
    </main>
  )
}

export default App;
