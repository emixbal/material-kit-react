import { connect } from 'react-redux'
import App from './screen'
import { handleChangeAngka } from './actions'


const mapDispatchToProps = {
  handleChangeAngka,
}

const mapStateToProps = state => ({
  product: state.product
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)