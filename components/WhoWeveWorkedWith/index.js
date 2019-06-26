import { BodyCopy } from '../../common'
import styles from './styles.scss'

import {
  KALEIDOSCOPE_COMMUNICATIONS,
  HEAVE_SENT_CARDS,
  JUSTGIVING,
  OFFICE_SERVE,
  FIXR,
  WONDERBILL,
  APPLIED_BLOCKCHAIN,
  DAZN,
  ONE_O_ONE_WAYS,
  TATA_STEEL
} from './constants'

const SliderItem = ({ children }) => {
  return (
    <div className={styles.item}>{children}</div>
  )
}

const createSliderInfo = ({ name, imgSrc }) => ({
  name,
  imgSrc
})

const SliderInfo = {
  2014: [
    createSliderInfo(KALEIDOSCOPE_COMMUNICATIONS),
    createSliderInfo(HEAVE_SENT_CARDS),
    createSliderInfo(JUSTGIVING)
  ],
  2015: [
    createSliderInfo(JUSTGIVING)
  ],
  2016: [
    createSliderInfo(JUSTGIVING),
    createSliderInfo(OFFICE_SERVE),
    createSliderInfo(FIXR)
  ],
  2017: [
    createSliderInfo(FIXR),
    createSliderInfo(WONDERBILL)
  ],
  2018: [
    createSliderInfo(WONDERBILL),
    createSliderInfo(APPLIED_BLOCKCHAIN),
    createSliderInfo(DAZN),
    createSliderInfo(ONE_O_ONE_WAYS),
  ],
  2019: [
    createSliderInfo(TATA_STEEL),
  ],
}

class WorkedWith extends React.Component {
  renderSlider = () => {
    return Object.entries(SliderInfo).map(([key, value]) => {
      return (
        <div className={styles.yearWrapper} key={key}>
          <BodyCopy className={styles.title}>
            {String(key)}
          </BodyCopy>
          <div>
            {
              value.map(({ name, imgSrc }) => {
                return (
                  <div key={`${key}-${name}`}>
                    <BodyCopy>
                      {name}
                    </BodyCopy>
                    <img
                      className={styles.img}
                      src={imgSrc} 
                      alt={`${name} image`}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <BodyCopy className={styles.title}>
          Who we've worked with
        </BodyCopy>

        <div className={styles.slider}>
          {this.renderSlider()}
        </div>
      </div>
    )
  }
}

export default WorkedWith