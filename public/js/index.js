import Start from "./views/Start"
import SignIn from "./views/SignIn"
import SignUp from "./views/SignUp"
import Stats from "./views/Stats"
import Settings from "./views/Settings"
import IntermediateStage from "./views/IntermediateStage"
import Game from "./views/Game"
import RoundScore from "./views/RoundScore"
import {createDicts} from "./models/Dictionary"
import {auth, database} from "./firebase/firebase.js"


const router = async () => {

    const routes = [
        { path: "/", view: Start },
        { path: "/sign_in", view: SignIn },
        { path: "/sign_up", view: SignUp },
        { path: "/stats", view: Stats },
        { path: "/settings", view: Settings },
        { path: "/intermediate_stage", view: IntermediateStage },
        { path: "/round_score", view: RoundScore },
        { path: "/game", view: Game }
    ]

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => 
        potentialMatch.isMatch)

    if (!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view()

    document.querySelector("#app").innerHTML = await view.getHtml()

    await view.handle()

    console.log("sessionsStorage", sessionStorage)

    if(match.route.path === '/sign_up'|| location.pathname === "/sign_up"){
        document.getElementById('sign-up-button').addEventListener('click', (e) =>{
            e.preventDefault()
            view.signUpClick(auth, database)
            navigateTo('/')})
    }

    if(match.route.path === '/sign_in'|| location.pathname === "/sign_in"){
        document.getElementById('sign-in-button').addEventListener('click', (e) =>{
            e.preventDefault()
            view.signInClick(auth)
            navigateTo('/')})
    }
}

export const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

await createDicts()
// window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    router()
})

document.body.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
    }
})