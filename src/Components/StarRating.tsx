import React from 'react'

const StarRating = ({starVal}: {starVal: number}) => {
    const[rating, setRating] = React.useState<number>(starVal);
  return (
    <div className="star-rating">
        {
            [...Array(3)].map((star, index) => {
                index += 1;
                return (
                    <button 
                    type="button"
                    key={index}
                    className={index <= rating ? 'on' : 'off'}
                    onClick={() => setRating(index)}><span className="star">&#9733;</span></button>
                )
                }) 
        }
    </div>
  )
}

export default StarRating