export const API = "http://localhost:8000/api/" ;

//SIGNUP
export const signup = user => {
    return fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

//SIGNIN
export const signin = user => {
    console.log("User is", user)
    return fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

//SETTING THE JWT TOKEN IN USER'S BROWSER
export const authenticate = (data, next) => {
    if(typeof window!=="undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

//SIGNOUT -> REMOVING JWT TOKEN
export const signout = next => {
    if(typeof window!=="undefined")
        localStorage.removeItem("jwt")
        next();

        return fetch(`${API}/signout`, {
            method: "GET"
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))

}

//VALIDATION IF USER IS SIGNED IN
export const isAuthenticated = () => {
    if (typeof window === "undefined") {
        return false
    }
    if(localStorage.getItem("jwt"))
        return JSON.parse(localStorage.getItem("jwt"));
    else
        return false
}

