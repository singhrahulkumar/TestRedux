import React from 'react';
import { connect } from 'react-redux';
import {setFolderGridData} from './actions/bookActions';


class DisplayTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentHover : 0,
            currentEdit:0,
            editvalue:[],
        }
        this.editPage=this.editPage.bind(this);
        this.deletePage=this.deletePage.bind(this);
        this.addNewSubFolder = this.addNewSubFolder.bind(this);
        this.pushItem=this.pushItem.bind(this);
        this.popItem=this.popItem.bind(this);
        this.setEditableValue=this.setEditableValue.bind(this);
    };

    setEditableValue(e,dataId){
        console.log("edit",dataId);
        const {dispatch,folderGridData} = this.props;
        let value = folderGridData;
          value.map((data,i) => {
            if(dataId === data.id) {
               value[i].name = e.target.value;
               return;
            }
        })
       dispatch(setFolderGridData(value));
        this.forceUpdate();
    }
    getEditValue(id) {
        console.log("id",id,this.state.editvalue);
        let value ='';
        this.state.editvalue.map((data) => {
            if(id === data.id) {
                value = data.value
            }
        })
        console.log("value",value);
        return value;
    }
    pushItem(e,id){
        this.setState({
            currentHover:id
        })
    }
    popItem(e){
        this.setState({
            currentHover:0,
            currentEdit:0
        })
    }
addNewSubFolder(e) {
       const {dispatch,folderGridData} = this.props;
        var data = folderGridData;
        data.push({
            id:folderGridData[folderGridData.length -1].id +1,
            name:"subfolder"+ folderGridData[folderGridData.length -1].id +1,
            created:"21/05/2019",
            updated:"21/05/2019"
        });
       dispatch(setFolderGridData(data));
       this.forceUpdate();
}

deletePage(e){
const {dispatch,folderGridData} = this.props;
var idcopy=0;
folderGridData.map((data,i)=>{
    if(data.id==e.target.id)
    {
        idcopy=i;
    }
})
 folderGridData.splice(idcopy,1);
dispatch(setFolderGridData(folderGridData));
this.forceUpdate();
}

 editPage(e,data){
     let editedData = this.state.editvalue;
     editedData.push({
         id:data.id,
         value:data.name
     })
     this.setState({
         currentEdit: data.id,
         editvalue:editedData
        })
}

render() {
     var {folderGridData}=this.props;
    
     return (
          <div>
              <button  id ="add" className="btn btn-primary pull-right" onClick={this.addNewSubFolder} >ADD</button>
         <table className={'table table-striped'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {folderGridData.map((data,i) =>
            
                   <tr key={i} onMouseEnter ={(e) =>this.pushItem(e,data.id)} onMouseLeave ={this.popItem} id = {data.id}>
                       {this.state.currentHover === data.id && this.state.currentEdit === data.id ?
                       <td><input type = "text" value = {data.name} onChange={(e) =>this.setEditableValue(e,data.id)}/></td>
                       :<td>{data.name}</td> }
                      <td>{data.created}</td>
                      <td>{data.updated}</td>
                    { this.state.currentHover === data.id ?
                      <td  onClick={(e) => this.editPage(e,data)} > <span className={'edit-action action-btn'}>edit</span></td>
                      :<td></td>
                      }
                    {this.state.currentHover === data.id ? <td  onClick={this.deletePage}> <span id={data.id} className={'delete-action action-btn'}>delete</span></td>
                     :<td></td>
                    }
             </tr>
           
                    )}
            </tbody>
            </table>
     </div>
      );
   }
}
function mapStateToProps(state) {
  const {folderGridData} = state.bookReducer;
  return {folderGridData};
}
export default connect(mapStateToProps)(DisplayTable);