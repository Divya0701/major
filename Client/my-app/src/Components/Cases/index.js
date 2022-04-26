import React from "react";
import "./index.css";
import image1 from '../../Images/divya.jpg'
import image2 from '../../Images/madhu.jpg'
import image3 from '../../Images/vimala.jpg'
import image4 from '../../Images/sameera.jpg'
import image5 from '../../Images/teju.jpg'
const casesList=[
    {'name':'divya',
     'age':'20',
     'imageUrl':image1
    },
    {'name':'madhu',
     'age':'20',
     'imageUrl':image2
    }
    ,{'name':'vimala',
    'age':'20',
    'imageUrl':image3
   },
   {
       'name':'sameera',
       'age':'21',
       'imageUrl':image4
   },
   {
       'name':'Teju',
       'age':'21',
       'imageUrl':image5
   }
]
const ImageContainer=props=>{
   const {item}=props
   const {name,age,imageUrl}=item
  return(
      <li className="card">
          <img src={imageUrl} alt="" className="profileImage"/>
          <p className="text">name : {name}</p>
          <p className="text">age : {age}</p>
      </li>
  )
}

const Cases=()=>
{
    return(
        <div className="cases-outer-div">
           <h1 className="caseHead">Still Not Found 402</h1>
           <ul className="inner-div">
               {
                   casesList.map((eachItem,index)=><ImageContainer item={eachItem} key={index}/>)
               }
           </ul>

        </div>
    );
}
export default Cases;