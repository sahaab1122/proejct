import React from "react";
import Navbar from "./Navbar";
import cateimg from "../assets/cateimg.png";
import { useTranslation } from "react-i18next"
import { faCity } from "@fortawesome/free-solid-svg-icons";
import city from "../assets/city.png";

export default (props) => {

  const { t } = useTranslation()
  return (



    <div>
      <div className="img-2">
        <Navbar />
      </div>
      <div class="row no-gutters" >
        <div class="col-md-6" >
          <div class="jumbotron jumbotron-fluid"  >
            <div class="container">
              <form style={{marginLeft:"100px"}}>
                <div class="form-row">
                  <div class="form-group col-md-5">
                    <p style={{ textAlign: "left" }}>{t("Add Coupon")}</p>
                    <input type="coupon" class="form-control" id="inputEmail4" placeholder={t("coupon")} style={{ backgroundcolor: "#f2f2f",border:"0px" }}></input>
                  </div>
                  <button type="button" class="btn btn-danger btn-sm" style={{ height: "40px", marginTop: "45px", width: "125px" }}>{t("Apply")}</button>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-4">
                    <p style={{ textAlign: "left" }}>{t('Enter Details')}</p>
                    <input type="Full Name"style={{border:"0px"}} class="form-control" id="inputEmail4" placeholder={t("Full Name")}></input>
                  </div>
                  <div class="form-group col-md-4">

                    <input type="address"  class="form-control" id="inputPassword4" placeholder={t("Address")} style={{ marginTop: "47px",border:"0px" }}></input>
                  </div>
                </div>


                <div class="form-row">
                  <div class="form-group col-md-4">

                    <input type="Phone Number" style={{border:"0px"}} class="form-control" id="inputEmail4" placeholder={t("Phone Number")}></input>
                  </div>
                  <div class="form-group col-md-4">

                    <input type="City"  style={{border:"0px"}}class="form-control" id="inputPassword4" placeholder={t("City")} ></input>
                  </div>
                </div>


                <div class="form-row">
                  <div class="form-group col-md-4">

                    <input type="email" style={{border:"0px"}} class="form-control" id="inputEmail4" placeholder={t("Email")}></input>
                  </div>
                  <div class="form-group col-md-4" >

                    <input type="Country" style={{border:"0px"}} class="form-control" id="inputPassword4" placeholder={t("Country")} ></input>
                  </div>
                </div>

                <div class="form-group" style={{ width: "66.5%", color:"#4b4b4b" }}>

                  <textarea class="form-control" style={{border:"0px"}} id="exampleFormControlTextarea1" rows="4" cols="2" placeholder={t("Remarks")}></textarea>
                </div>


                <button type="button" class="btn  btn-lg btn-block" style={{ width: "66.5%" }}>{t("Place Order")}</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="jumbotron jumbotron-fluid" style={{ backgroundcolor: "#e3f2fd;",  }}>
            <div class="container" style={{ width: "70%" }}>
              <div class="card mb-3" style={{ height: "auto", borderRadius: "20px" ,border:"0px"}}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={cateimg} style={{ width: "102px", height: "101px", padding: "12px", borderRadius: "20px" }} />
                  </div>
                  <div class="col-md-4">
                    <div class="card-body" style={{ textAlign: "center" }}>

                      <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '12px', fontFamily: "poppins", margin: "0px", padding: "0px" }}>
                        <p >{t("Product Name")}</p>
                        <p style={{ marginTop: "-10px" }}>{t("Category")}</p>


                        <button type="button" class="btn btn-secondary btn-sm btn-block" style={{ borderRadius: "4px", background: "#960200", color: "white", width: "95px", alignSelf: "center" }}>{t("Remove")}</button>
                      </div>

                    </div>

                  </div>
                  <div class="col-md-4">
                    <div class="card-body" style={{ textAlign: "center", }}>

                      <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '19px', fontFamily: "poppins" }}>
                        <p>{t("Price")}</p>
                        <p>{t("$1123")}</p>


                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div class="container" style={{ width: "70%"  }}>
              <div class="card mb-3" style={{ height: "auto", borderRadius: "20px",border:"0px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={cateimg} style={{ width: "102px", height: "101px", padding: "12px", borderRadius: "20px" }} />
                  </div>
                  <div class="col-md-4">
                    <div class="card-body" style={{ textAlign: "center" }}>

                      <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '12px', fontFamily: "poppins", margin: "0px", padding: "0px" }}>
                        <p >{t("Product Name")}</p>
                        <p style={{ marginTop: "-10px" }}>{t("Category")}</p>


                        <button type="button" class="btn btn-secondary btn-sm btn-block" style={{ borderRadius: "4px", background: "#960200", color: "white", width: "95px", alignSelf: "center" }}>{t("Remove")}</button>
                      </div>

                    </div>

                  </div>
                  <div class="col-md-4">
                    <div class="card-body" style={{ textAlign: "center", }}>

                      <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '19px', fontFamily: "poppins" }}>
                        <p>{t("Price")}</p>
                        <p>{t("$1123")}</p>


                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
            <div class="container" style={{ width: "70%" }}>
              <div class="card mb-3" style={{ height: "auto", borderRadius: "20px",border:"0px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={cateimg} style={{ width: "102px", height: "101px", padding: "12px", borderRadius: "20px" }} />
                  </div>
                  <div class="col-md-4">
                    <div class="card-body" style={{ textAlign: "center" }}>

                      <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '12px', fontFamily: "poppins", margin: "0px", padding: "0px" }}>
                        <p >{t("Product Name")}</p>
                        <p style={{ marginTop: "-10px" }}>{t("Category")}</p>


                        <button type="button" class="btn btn-secondary btn-sm btn-block" style={{ borderRadius: "4px", background: "#960200", color: "white", width: "95px", alignSelf: "center" }}>{t("Remove")}</button>
                      </div>

                    </div>

                  </div>
                  <div class="col-md-4" style={{ width: "70%" }}>
                    <div class="card-body" style={{ textAlign: "center", }}>

                      <div class="column" style={{ backgroundcolor: "#bbb", fontSize: '19px', fontFamily: "poppins" }}>
                        <p>{t("Price")}</p>
                        <p>{t("$1123")}</p>


                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="card-body" className="text-left" style={{ width: "100%", marginRight:"400px"  }}>
              <div class="card mb-3" style={{ border: "0px", borderRadius: "20px" }}>
                <div class="row g-0">
                  <div class="col-md-4" style={{ alignSelf: "center " }}>
                    <p style={{ fontfamily: "Poppins", fontweight: "700", fontsize: "39px", color: "#960200", marginLeft: "50px" }}>{t("Total")}</p>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <div class="column" style={{ backgroundcolor: "transparent", fontSize: '29px ', fontFamily: "poppins", color: "#960200", textAlign: "right" }}>

                        <p >{t("$1123")}</p></div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
            </div>

            
          </div>
        </div>
      </div>

    </div>







  )
}




