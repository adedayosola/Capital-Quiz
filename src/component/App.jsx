import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/questionlist.jsx'
import ScoreBox from './quiz/scorebox.jsx'
import Results from './quiz/result.jsx'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      questions:[
        {
          id: 1,
          text: 'What is the Capital of Japan?',
          choices:[
            {
              id:'A',
              text: 'Tokyo'
            },
            {
              id:'B',
              text: 'Osaka'
            },
            {
              id:'C',
              text: 'Bejing'
            }
          ],
          correct: 'A'
        },
        {
          id: 2,
          text: 'What is the Capital of Nigeria?',
          choices:[
            {
              id:'A',
              text: 'Accra'
            },
            {
              id:'B',
              text: 'Lagos'
            },
            {
              id:'C',
              text: 'Abuja'
            }
          ],
          correct: 'C'
        },
        {
          id: 3,
          text: 'What is the Capital of Kenya?',
          choices:[
            {
              id:'A',
              text: 'Kamapala'
            },
            {
              id:'B',
              text: 'Safari'
            },
            {
              id:'C',
              text: 'Nairobi'
            }
          ],
          correct: 'C'
        },
        {
          id: 4,
          text: 'What is the Capital of Bolivia?',
          choices:[
            {
              id:'A',
              text: 'Sucre'
            },
            {
              id:'B',
              text: 'La Paz'
            },
            {
              id:'C',
              text: 'Santa Cruz de la Sierra'
            }
          ],
          correct: 'A'
        },
        {
          id: 5,
          text: 'What is the Capital of Germany?',
          choices:[
            {
              id:'A',
              text: 'Munich'
            },
            {
              id:'B',
              text: 'Berlin'
            },
            {
              id:'C',
              text: 'Mainz'
            }
          ],
          correct: 'B'
        },
        {
          id: 6,
          text: 'What is the Capital of Canada?',
          choices:[
            {
              id:'A',
              text: 'Toronto'
            },
            {
              id:'B',
              text: 'Ottawa'
            },
            {
              id:'C',
              text: 'Ontario'
            }
          ],
          correct: 'B'
        },
        {
          id: 7,
          text: 'What is the Capital of Australia?',
          choices:[
            {
              id:'A',
              text: 'Canberra'
            },
            {
              id:'B',
              text: 'Sydney'
            },
            {
              id:'C',
              text: 'Melbourne'
            }
          ],
          correct: 'A'
        },
        {
          id: 8,
          text: 'What is the Capital of Iran?',
          choices:[
            {
              id:'A',
              text: 'Shiraz'
            },
            {
              id:'B',
              text: 'Mashhad'
            },
            {
              id:'C',
              text: 'Tehran'
            }
          ],
          correct: 'C'
        },
        {
          id: 9,
          text: 'What is the Capital of Jamaica?',
          choices:[
            {
              id:'A',
              text: 'St Merrins'
            },
            {
              id:'B',
              text: 'Kingston'
            },
            {
              id:'C',
              text: 'Pattois'
            }
          ],
          correct: 'B'
        },
        {
          id: 10,
          text: 'What is the Capital of Bangladesh?',
          choices:[
            {
              id:'A',
              text: 'Dhaka'
            },
            {
              id:'B',
              text: 'Bengal'
            },
            {
              id:'C',
              text: 'Chittagong'
            }
          ],
          correct: 'A'
        },
      ],
      score: 0,
      current: 1
    }
  }
  setCurrent(current){
    this.setState({current});
  }
  setScore(score){
    this.setState({score});
  }

  render(){
    if(this.state.current>this.state.questions.length){
      var scorebox= '';
      var results = <Results {...this.state}/>;
    } else{
      var scorebox=<ScoreBox {...this.state}/>;
      var results ='';
    }
    return(
      <div>
        {scorebox}
       <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
        {results}
    </div>
    )
  }
}
export default App
