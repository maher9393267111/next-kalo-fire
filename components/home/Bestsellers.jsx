import { useDispatch, useSelector } from "react-redux";
//import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";
import { globaluse } from "../../context/global";
import HomeCard from "../cards/homecard";

function Best() {
  const { BestSellersProducts} = globaluse();

  useEffect(() => {
    BestSellersProducts();
  }, []);

  const dispatch = useDispatch();
  const { products, bestsellers } = useSelector((state) => state.global);

  const [users, setUsers] = useState(products);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = bestsellers
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((product) => {
      return (
        <div key={product.id} className=" mx-8 mt-4">
          <HomeCard product={product} />
        </div>
      );
    });

  const pageCount = Math.ceil(bestsellers.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App mt-12  pb-[100px]">
      <div className=" lg:w-[1200px]">
        <div className=" w-full h-[100px] mr-12 mb-4  text-white text-xl font-bold text-center  ">
          <h1 className="pt-8 text-2xl  ">Bestsellers products</h1>
        </div>
      </div>

      <div className=" grid sm:grid-cols-2  lg:grid-cols-3 gap-6">{displayUsers}</div>
      <div className=" mt-6">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default Best;
