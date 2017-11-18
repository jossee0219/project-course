import * as React from 'react';

class FormUser extends React.Component{
    
    constructor(){
        super();
        this.state = { users: [], nameText: '', lastNameText: '', emailText: '', phoneNumberText: '', countryText: '', addressText: '', shown: true};
        this._handleChangeFirstName = this._handleChangeFirstName.bind(this);
        this._handleChangeLastName = this._handleChangeLastName.bind(this);
        this._handleChangeCountry = this._handleChangeCountry.bind(this);
        this._handleChangeAddress = this._handleChangeAddress.bind(this);
        this._handleChangeEmail = this._handleChangeEmail.bind(this);
        this._handleChangePhoneNumber = this._handleChangePhoneNumber.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._handleClickDelete = this._handleClickDelete.bind(this);
        this._handleClickEdit = this._handleClickEdit.bind(this);
        this._handleClickSaveEdit = this._handleClickSaveEdit.bind(this);
    }

    /*toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}*/

    _handleChangeFirstName(event){
        this.setState({
            nameText: event.target.value
        });
    }

    _handleChangeLastName(event){
        this.setState({
            lastNameText: event.target.value
        });
    }

    _handleChangeCountry(event){
        this.setState({
            countryText: event.target.value
        });
    }

    _handleChangeAddress(event){
        this.setState({
            addressText: event.target.value
        });
    }

    _handleChangeEmail(event){
        this.setState({
            emailText: event.target.value
        });
    }

    _handleChangePhoneNumber(event){
        this.setState({
            phoneNumberText: event.target.value
        });
    }

    _handleClick(){
        let newUser = {
            id : Date.now(),
            firstname : this.state.nameText,
            lastname: this.state.lastNameText,
            country: this.state.countryText,
            address: this.state.addressText,
            email: this.state.emailText,
            phonenumber: this.state.phoneNumberText
        }
        
        this.setState(prevState => (
            {
                users: prevState.users.concat(newUser),
                nameText: '',
                lastNameText: '',
                countryText: '',
                addressText: '', 
                emailText: '',
                phoneNumberText: ''
            }
        ));    
    }

    _handleClickEdit = (id) => (e) => {
        console.log(id);
        let user = this.state.users.map(function(user) {
            if (user.id === id){
              return user
            } 
        }, this);
        
        let index = this.state.users.findIndex(user => 
            user.id === id
        ); 

        console.log(index)
        console.log(user[index])
        
        this.setState({

            nameText: user[index].firstname,
            lastNameText: user[index].lastname,
            countryText: user[index].country,
            addressText: user[index].address, 
            emailText: user[index].email,
            phoneNumberText: user[index].phonenumber,
            shown: !this.state.shown
        })

        return(
           <button> Take karete take</button>
        )
    }
      
    _handleClickSaveEdit = (id) => (e) => {
        console.log(id);
        let user = this.state.users.map(function(user) {
            if (user.id === id){
                return user
            } 
        }, this);
        
        let index = this.state.users.findIndex(user => 
            user.id === id
        ); 

        console.log(index)
        console.log(user[index])
        
        this.setState({

            user: [
                ...user.slice(0,index),
                user[index].firstname = this.state.nameText,
                user[index].lastname = this.state.lastNameText,
                user[index].country = this.state.countryText,
                user[index].address = this.state.addressText,
                user[index].email = this.state.emailText,
                user[index].phonenumber = this.state.phoneNumberText,
                ...user.slice(index + 1) 
            ],
            
            nameText: '',
            lastNameText: '',
            countryText: '',
            addressText: '', 
            emailText: '',
            phoneNumberText: '',
            shown: !this.state.shown
            
        })
    }

    _handleClickDelete = (id) => (e) => {
        console.log(id);
        let users = this.state.users;
        let index = this.state.users.findIndex(user => 
            user.id === id
        );
        console.log(index)

        this.setState({
            users: users.filter((user,i) =>
                index !== i
            )
        })
      }    

    render(){
        var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		var hidden = {
			display: this.state.shown ? "none" : "block"
		}
        return(
            <div className='row'>  
                
                <div className='column'>
                    <label>First Name: </label>
                    <input ref='inputName'
                        onChange = {this._handleChangeFirstName}
                        value = {this.state.nameText}>
                    </input>
                    <br/>
                    <label>Last Name: </label>
                    <input 
                        onChange = {this._handleChangeLastName}
                        value = {this.state.lastNameText}>
                    </input>
                    <br/>
                    <label>Country :</label>
                    <input
                        onChange = {this._handleChangeCountry}
                        value = {this.state.countryText}>
                    </input>
                </div>

                <div className='column'>
                    <label>Address :</label>
                    <input
                        onChange = {this._handleChangeAddress}
                        value = {this.state.addressText}>
                    </input>
                    <br/>
                    <label>Email: </label>
                    <input
                        onChange = {this._handleChangeEmail}
                        value = {this.state.emailText}>
                    </input>
                    <br/>
                    <label>Phone Number: </label>
                    <input
                        onChange = {this._handleChangePhoneNumber}
                        value = {this.state.phoneNumberText}>
                    </input>
                </div>

                <div className='columnb'>    
                    <button onClick = {this._handleClick}>Save!!</button>
                </div>

                {this.state.users.map(user => (
                <div key={user.id} className='container-ppal'>
                    <div style={ hidden }  className='columnb'>
                        <button 
                        onClick = {this._handleClickSaveEdit(user.id)} >Save Edit!</button>
                    </div>
                    
                    <ul>
                        <div className='container'>
                            <button onClick={this._handleClickDelete(user.id)}>x</button>
                            <button onClick={this._handleClickEdit(user.id)}>Edit</button>    
                            <div className='logo'>
                                <span>Stylepills</span>
                                <img src="http://stylepills.co/static/media/Stylepills-main-short-logo.e188c5a5.svg"
                                alt='logo'></img>
                            </div>
                            <p id='name'>{user.firstname} {user.lastname}</p>
                            <p className='title'>First Job Title</p>
                            <p className='title'>Second Job Title</p>
                            <p id='country'>{user.country}</p>
                            <br/>
                            <p id='address'>{user.address}</p>
                            <br/>
                            <p id='phoneNumber'>P - {user.phonenumber} / M - {user.phonenumber} / F - {user.phonenumber}</p>
                            <p id='email'>{user.email}</p> 
                        </div>
                        
                     
                </ul>
                </div>
                ))} 
            </div>
        );
    }
}

export default FormUser;    
