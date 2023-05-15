// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerItem} = props
  const {headerText, description, className} = bannerItem
  return (
    <li className={`banner-card-container ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
