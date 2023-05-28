// Write your code here.
import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="bg-container">
          <h1 className="heading">FAQs</h1>
          <div>
            <ul className="faqs-container">
              {faqsList.map(eachFaq => (
                <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Faqs
