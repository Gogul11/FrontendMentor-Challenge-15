import { useEffect, useState } from 'react'
import Advice from './components/advice'
import { dice } from './img'
import axios from 'axios'


function App() {

    const [advice, setAdvice] = useState("")
    const [adviceNum, setAdviceNum] = useState(-1)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      generate()
    }, [])
    
    const generate = () => {
      setLoading(true);
      axios.get("https://api.adviceslip.com/advice")
      .then(res =>{ setAdvice(res.data.slip.advice)
                    setAdviceNum(adviceNum => adviceNum + 1) })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    }

  return (

    <div className='main'>
        <Advice advice = {advice} no={adviceNum}/>

        <button onClick={generate}>
        {loading ? "Fetching..." : <img src={dice} alt="button" />}
        </button>

    </div>

  )
}

export default App
