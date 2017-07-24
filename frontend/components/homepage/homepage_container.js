import { connect } from 'react-redux';
import { selectAllPhotos } from '../../reducers/selectors';
import { fetchPhotos } from '../../actions/photo_actions';
import Homepage from './homepage';

const mapStateToProps =  (state) => {
  return {photos: selectAllPhotos(state)};
};


const mapDispatchToProps = dispatch => ({
  fetchPhotos:() => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
