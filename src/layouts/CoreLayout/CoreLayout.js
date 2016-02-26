import React, { PropTypes } from 'react'
import '../../styles/core.scss'

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default CoreLayout
