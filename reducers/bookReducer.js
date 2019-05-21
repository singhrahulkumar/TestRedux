import {SET_FOLDER_GRID_DATA} from '../actions/bookActions'
const defaultstate={
    folderGridData:[]
}

function bookReducer(state = defaultstate, action) {
    
    switch(action.type) {
        case 'SET_FOLDER_GRID_DATA' :
           return {
               ...state,
               folderGridData:action.folderGridData
           }

     default : return state;

    }
}

export default bookReducer