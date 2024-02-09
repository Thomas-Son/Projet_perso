import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function HOC({ child }) {

    const titles = {
        "/": "Accueil - Thomas Son",
        "/a-propos": "À propos - Thomas Son",
        "/mes-projets": "Mes projets - Thomas Son",
        "/me-contacter": "Me contacter - Thomas Son",
    }
    const location = useLocation();
    const Child = child;

    useEffect(() => {
        window.scroll(0,0);
        document.title = titles[location.pathname];
    }, [location]);

    return <Child />;
}

export default HOC;