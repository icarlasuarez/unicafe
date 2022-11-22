const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral
  const average = (props.good - props.bad )/ all
  const positive = props.good / all * 100

  return (
    <div>
      {(all > 0) ?
        <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {all}</p>
        <p>Average: {average}</p>
        <p>Positiva: {positive}%</p>
      </div>
      :'No feedback given'
      }
    </div>
    
  )
}

export default Statistics