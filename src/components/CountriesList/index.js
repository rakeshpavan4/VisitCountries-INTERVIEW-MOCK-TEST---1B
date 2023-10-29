import './index.css'

const CountriesList = props => {
  const {details, addVisitedCountry} = props
  const {id, name, isVisited} = details

  const countryText = isVisited ? 'Visited' : 'Visit'

  const addCountry = () => {
    addVisitedCountry(id)
  }
  return (
    <li>
      <p>{name}</p>
      {isVisited === true ? (
        <p>{countryText}</p>
      ) : (
        <button type="button" onClick={addCountry}>
          {countryText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
