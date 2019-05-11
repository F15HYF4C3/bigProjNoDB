import React from 'react';
import './DraftList.css';




export default (props) =>{
// class DraftList extends Component {
    // console.log(props)
    const teams = props.FaveList.map((e, i)=>{
    return <div key={e.code}>
        {e.fullName}
    </div>

    })
        return(

            <div className="draftList">
            Favorite Teams
            <section>
                {teams}
    {/* <p>1.{props.FaveList[0]}</p>
    <p>2.{props.FaveList[1]}</p>
    <p>3.{props.FaveList[2]}</p>
    <p>4.{props.FaveList[3]}</p>
    <p>5.{props.FaveList[4]}</p> */}
        </section>



            </div>
        )
    }



    //   export default DraftList

//THIS WAS MEANT TO BE A SIDE SHELF WHERE YOU COULD PICK YOUR 5 FAVORITE TEAMS TO DISPLAY
//functional component
// not using methods
// not using state

// import React from 'react'

// const profileImg = (props) => {
// //instead of using this.props
// //use props.
//   return (
//     <div>
//     </div>
//   )
// }

// export default profileImg
