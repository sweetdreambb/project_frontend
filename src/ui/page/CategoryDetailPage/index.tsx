import {useLocation, useParams} from "@tanstack/react-router";
import TopNavbar from "../../component/TopNavbar";
import Announcebar from "../../component/Announcebar";

export default function CategoryDetailPage(){
  const {category}=useParams({from:"/category/$category"});
  const location=useLocation();

  return (
    <div className="category-detail-container">
      <Announcebar/>
      <TopNavbar/>
      <h1>Category Detail Page!</h1>

      <h3>Pathname: {location.pathname}</h3>
    </div>
  );
}