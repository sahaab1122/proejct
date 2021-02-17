import React from "react";
import Navbar from "./Navbar";
import cateimg from "../assets/cateimg.png";
import {useTranslation} from "react-i18next"

export default (props) => {

  const { t } = useTranslation()
        return (
          

            
       	<div>
           <div className="img-1">
            <Navbar /></div>
	<table style={{marginLeft:"160px"}} >
  <tr  >
    <th className="col-65" style={{backgroundColor:"white",fontfamily: "Poppins",fontweight: "400", fontsize: "38px",textalign: "left" ,color: "#960200"}}><p style={{ marginTop:"20px"}}>{t("Add Coupon")}</p>
    <input type="text" id="fname" name="firstname" placeholder={t("coupon")}style={{width: "277px", height: "38px", borderRadius: "6px" ,background:" #f2f2f2" }}></input>
   <button class="block" style={{marginLeft:"20px" ,width:"155px", height: "38px", borderRadius:"6px",background: "#960200", color:"white"}}>{t("Apply")}</button>
   <td><p style={{fontfamily: "Poppins" ,fontweight: "600", fontsize: "45px",textalign: "left", color: "#960200", fontSize:"26px", marginTop:"30px"}}> {t("Enter Details")}</p> </td><br></br>
   <tr >
		<th >
    <input type="text" id="fname" name="firstname" placeholder={t("Full Name")} style={{width: "225px", height: "38px", borderRadius:"6px"  ,background:" #f2f2f2"  }}></input>
		</th>
		<th >
    <input type="text" id="fname" name="firstname" placeholder={t("Address")} style={{width: "225px", height: "38px", borderRadius:"6px" ,background:" #f2f2f2" ,marginLeft:"30px"  }}></input>
		</th>
    
	</tr>
  <br></br>
  <tr >
  <th >
  <input type="text" id="fname" name="firstname" placeholder={t("Phone Number")} style={{width: "225px", height: "38px", borderRadius:"6px" ,background:" #f2f2f2"  }}></input>
		</th>
		<th >
    <input type="text" id="fname" name="firstname" placeholder={t("City")} style={{width: "225px", height: "38px", borderRadius:"6px" ,background:" #f2f2f2" ,marginLeft:"30px" }}></input>
		</th>
  </tr>
  <br></br>
  <tr>
  <th >
  <input type="text" id="fname" name="firstname" placeholder={t("Email")} style={{width: "225px", height: "38px",borderRadius:"6px",background:" #f2f2f2"  }}></input>
		</th>
		<th >
    <input type="text" id="fname" name="firstname" placeholder={t("country")} style={{width: "225px", height: "38px", borderRadius:"6px" ,background:" #f2f2f2" ,marginLeft:"30px" }}></input>
		</th>
  </tr>
  <br></br>
  
  <textarea rows="4" cols="59" name="comment" form="usrform" placeholder={t("remarks")} style={{ borderRadius:"6px" ,background:" #f2f2f2"}}>
</textarea>
  
  <tr><button class="block" style={{width:"488px", height: "38px", borderRadius:"6px",background: "#960200", color:"white"}}>{t("Place Order")}</button></tr>    
    </th>



    <th  className="col-35" style={{backgroundColor:"WHITE"}}>
    
      <div class="card " style={{borderRadius:"12px", width:"312px",height:"103px"}}>
      <div class="card-body text-center">
      <div class="row" style={{marginLeft:"20px"}} >
      <div class="column" style={{backgroundcolor:"#f2f2f2"}}>
      <img src={cateimg} style={{ width: "72px",height:"71px", }} />
    
  </div>
  <div class="column" style={{backgroundcolor:"#bbb",fontSize:'9px', fontFamily:"poppins"}}>
  <p >{t("Product Name")}</p>
    <p>{t("Category")}</p>
    <button style={{marginTop:"-10px" ,marginLeft:"20px" ,width:"63px", height: "22px", borderRadius:"4px",background: "#960200", color:"white"}}>{t("Remove")}</button>
  
    
  </div>
  <div class="column" style={{backgroundcolor:"#bbb" ,fontSize:'9px', fontFamily:"poppins"}}>
  <p>{t("Price")}</p>
    <p>{t("$1123")}</p>
    
    
  </div></div>
      </div>
    </div>  
      
      
      
      <div class="card " style={{borderRadius:"12px", width:"312px",height:"103px"}}>
      <div class="card-body text-center">
      <div class="row" style={{marginLeft:"20px"}} >
      <div class="column" style={{backgroundcolor:"#f2f2f2"}}>
      <img src={cateimg} style={{ width: "72px",height:"71px", }} />
    
  </div>
  <div class="column" style={{backgroundcolor:"#bbb",fontSize:'9px', fontFamily:"poppins"}}>
  <p >{t("Product Name")}</p>
    <p>{t("Category")}</p>
    <button style={{marginTop:"-10px" ,marginLeft:"20px" ,width:"63px", height: "22px", borderRadius:"4px",background: "#960200", color:"white"}}>{t("Remove")}</button>
  
    
  </div>
  <div class="column" style={{backgroundcolor:"#bbb" ,fontSize:'9px', fontFamily:"poppins"}}>
  <p>{t("Price")}</p>
    <p>$1123</p>
    
    
  </div></div>
      </div>
    </div>  
      
      
      
      <div class="card " style={{borderRadius:"12px", width:"312px",height:"103px"}}>
      <div class="card-body text-center">
      <div class="row" style={{marginLeft:"20px"}} >
      <div class="column" style={{backgroundcolor:"transparent"}}>
      <img src={cateimg} style={{ width: "72px",height:"71px", }} />
    
  </div>
  <div class="column" style={{backgroundcolor:"#bbb",fontSize:'9px', fontFamily:"poppins"}}>
  <p >{t("Product Name")}</p>
    <p>{t("Category")}</p>
    <button style={{marginTop:"-10px" ,marginLeft:"20px" ,width:"63px", height: "22px", borderRadius:"4px",background: "#960200", color:"white"}}>{t("Remove")}</button>
  
    
  </div>
  <div class="column" style={{backgroundcolor:"transparent" ,fontSize:'9px', fontFamily:"poppins"}}>
  <p>{t("Price")}</p>
    <p>$1123</p>
    
    
  </div></div>
      </div>
    </div>  
      
      
    <div class="card " style={{borderRadius:"12px", width:"381px",height:"65px"}}>
      <div class="card-body text-center">
      <div class="row" style={{marginLeft:"20px"}} >
      <div class="column" style={{fontfamily: "Poppins",fontweight: "500",fontsize: "19px",textalign: "left",color: "#960200"
}}>
      <p style={{ textalign:"left"}}>{t("Total")}</p>
    
  </div>
  <div class="column" style={{backgroundcolor:"#bbb",fontSize:'29px', fontFamily:"poppins"}}>
  
   
    
  </div>
  <div class="column" style={{backgroundcolor:"transparent" ,fontSize:'29px', fontFamily:"poppins"}}>
  
    <p >$1123</p>
    
    
  </div></div>
      </div>
    </div>  
      
      
      


    </th>
    
  </tr>
  

</table>
	
</div>
    
          
      
   



        )
    }




