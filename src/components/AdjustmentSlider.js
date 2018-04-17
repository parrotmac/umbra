import React, {Component} from 'react'

class AdjustmentSlider extends Component {
    render() {
        return (
            <input type={'range'} onChange={this.props.onChange} />
        )
    }
}

export default AdjustmentSlider
