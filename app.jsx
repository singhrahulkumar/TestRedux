import React from 'react';
import DisplayTable from './displayTable.jsx';
import {setFolderGridData} from './actions/bookActions';
import { connect } from 'react-redux';

class App extends React.Component {

    constructor(props)
    {
        super (props);
        this.state={
        }
      this.saveGridData = this.saveGridData.bind(this);
      this.cancel = this.cancel.bind(this);
    }

componentWillMount()
{
    const {dispatch}=this.props;
    dispatch(setFolderGridData(this.props.folderGridData1));
}
saveGridData() {
   const {folderGridData} = this.props;
   console.log("send edited data",folderGridData);
    alert ("this data will be sent to db");
}

cancel() {
    const {dispatch}= this.props;
    var folderGridData = [
      {
          id:1,
          name:'subfolder1',
          created:'21/05/2019',
          updated:'22/05/2019'
      },
      {
          id:2,
          name:'subfolder2',
          created:'19/05/2019',
          updated:'20/05/2019'
      }
  ]
    dispatch(setFolderGridData(folderGridData));
    alert("cancelled all the edited data.....");
}
  
render() {
      return (
         <div className="InstantBox">
               <div className={'main-header clearfix'}> <h1 className={'text-center col-md-8 col-sm-6 col-xs-6'}>Test Redux</h1>
               </div>
               <div className={'col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 col-xs-12'}>
               <div>  
                   <div className={'tab-pane'}>
                    <button id={"save"} onClick = {this.saveGridData} className="btn btn-info manage-btn">Save</button>
                    <button id={"cancel"} onClick={this.cancel} className="btn btn-default">Cancel</button>
                </div>
                 <DisplayTable  />
                </div>
               </div>
                </div>
      );
   }
}

function mapStateToProps(state) {
  const {folderGridData} = state.bookReducer;
  return {folderGridData};
}
export default connect(mapStateToProps)(App);