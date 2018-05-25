const initialState = {
  propertyName: '',
  address: '',
  city: '',
  state: '',
  zip: 0,
  image: '',
  mortgage: 0,
  rent: 0
};

const UPDATE_PROPERTY = 'UPDATE_PROPERTY';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_PRICES = 'UPDATE_PRICES';


export function updateProperty(prop, address, city, state, zip){
  return {
    type: UPDATE_PROPERTY,
    payload: {prop, address, city, state, zip}
  }
};

export function updateImage(image){
  return {
    type: UPDATE_PROPERTY,
    payload: image
  }
};

export function updatePrices(mortgage, rent){
  return {
    type: UPDATE_PROPERTY,
    payload: {mortgage, rent}
  }
};


function reducer(state=initialState, action){
  switch(action.type){
    case UPDATE_PROPERTY:
      return {
        ...state,
        propertyName: action.payload.prop,
        address: action.payload.address,
        city: action.payload.city,
        state: action.payload.state,
        zip: action.payload.zip
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case UPDATE_PRICES:
      return {
        ...state,
        mortgage: action.payload.mortgage,
        rent: action.payload.rent
      };
    default:
      return state;
  }
};

export default reducer;