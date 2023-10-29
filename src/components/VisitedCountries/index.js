import './index.css'

const VisitedCountries = props => {
  const {details, deleteCountry} = props
  const {name, id, imageUrl} = details

  const remove = () => {
    deleteCountry(id)
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt="thumbnail" />
        <div>
          <p>{name}</p>
          <button data-testid="delete" type="button" onClick={remove}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
