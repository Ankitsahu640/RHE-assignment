import React, { useState } from "react";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {user}=props;

  const getPhoneNO = (no) =>{
    const number = no.replace(/[^\d]/g, '');
    return number.slice(0,10);
  }

  const getString = (str)=>{
    const st = str.replace(/[-,_]/g ," ");
    return st;
  }

  return (
    <div className="card-accordion">
        <div className="cardFront">
            <div className="frontDetail"><h5>{getString(user.company.name)}</h5></div>
            <div className="frontDetail">
                <b>CONTACT</b>
                <p>{getString(user.name)}</p>
            </div>
            <div className="frontDetail">
                <b>CITY</b>
                <p>{getString(user.address.city)}</p>
            </div>
            <div className="frontDetail">
                <b>STREET</b>
                <p>{getString(user.address.street)}</p>
            </div>
            <div>
                <button className="card-accordion__button" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Hide Detail" : "View Detail"}
                </button>
            </div>  
        </div>
        {isOpen && (
            <div className="card-accordion__content">
                <div className="cardDis">
                        <div className="backDetail">
                            <b>Discription</b>
                            <p>{user.company.catchPhrase} {user.company.bs}</p>
                        </div>
                    </div>
                <div className="cardDetail">
                    <div className="cardLeft">
                        <div className="backDetail">
                            <b>Contact Person</b>
                            <p>{getString(user.name)}</p>
                        </div>
                        <div className="backDetail">
                            <b>Website</b>
                            <p>{getString(user.website)}</p>
                        </div><div className="backDetail">
                            <b>Emails</b>
                            <p>{getString(user.email)}</p>
                        </div><div className="backDetail">
                            <b>Phones</b>
                            <p>{getPhoneNO(user.phone)}</p>
                        </div>
                    </div>
                    <div className="cardRight">
                        <div className="backDetail">
                            <b>Address</b>
                            <p>{user.address.suits} {getString(user.address.street)} {getString(user.address.city)}</p>
                        </div>
                        <div className="backDetail">
                            <b>Street</b>
                            <p>{getString(user.address.street)}</p>
                        </div><div className="backDetail">
                            <b>City</b>
                            <p>{getString(user.address.city)}</p>
                        </div><div className="backDetail">
                            <b>Zip Code</b>
                            <p>{user.address.zipcode}</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Card;