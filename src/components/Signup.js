import React from "react";
export default function Signup(props) {
    const showAlert=()=>{
        alert("Sign in successful");
    };
    return (
        <>
            <form className="d-flex flex-column justify-content-center align-items-center" style={{ border: '1px solid black', margin: '100px', padding: '10px' }}>
                <div className="row">
                    <div className="col-md">
                        <h2>{props.heading}</h2>
                        <div className="form-group">
                            <label className="form-label">Name: </label>
                            <br></br>
                            <input type="text" className="form-control" id="inputName" />
                        </div>
                        <div className="form-group">
                            <label size='100' for="inputPhone">Mobile no: </label>
                            <br></br>
                            <input type="tel" className="form-control" id="inputPhone" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email: </label>
                            <br></br>
                            <input type="email" className="form-control" id="inputEmail12" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password: </label>
                            <br></br>
                            <input type="password" className="form-control" id="inputPassword12" />
                        </div>
                        <div className="col">
                            <label className="form-label">Category: </label>
                            <br></br>
                            <select name="" id="" defaultValue="select">
                                <option selected>Electronics</option>
                                <option>Fashion</option>
                                <option>Health</option>
                                <option>Beauty</option>
                                <option>Grocery</option>
                                <option>Others</option>
                            </select>
                            
                        </div>
                        <div className="form-group">
                        
                            <label className="form-label">City: </label>
                            <br></br>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">State: </label>
                            <br></br>
                            <input type="text" className="form-control" id="inputState" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Zip: </label>
                            <br></br>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <button type="submit" onClick={showAlert} className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
