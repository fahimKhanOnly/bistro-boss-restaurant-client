import { useEffect, useState } from "react";

const useMenu = () => {
 const [getMenu, setMenu] = useState([]);
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  fetch("http://localhost:5000/menu").then(res => res.json())
   .then(result => {
    setLoading(false);
    setMenu(result);
   });

 }, [])
 return [getMenu, loading]
}

export default useMenu;