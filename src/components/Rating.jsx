function Rating({ value = 0 }) {
  function getStarClass(star) {
    if (value >= star) {
      return 'fa-solid fa-star'
    }

    if (value >= star - 0.5) {
      return 'fa-solid fa-star-half-stroke'
    }

    return 'fa-regular fa-star'
  }

  return (
    <p className="product-rating" aria-label={'Avaliação: ' + value + ' de 5'}>
      {[1, 2, 3, 4, 5].map((star) => (
        <i key={star} className={getStarClass(star)} aria-hidden="true" />
      ))}
      <span> ({value})</span>
    </p>
  )
}

export default Rating
