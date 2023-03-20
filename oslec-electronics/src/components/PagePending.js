import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageRecordsContainer = () => {
    const { numOfPending, pendingPage, page , changePagePending } = useAppContext();

    const pages = Array.from({ length: numOfPending }, (_, index) => {
      return index + 1;
    });
  
    const prevPage = () => {
      let newPage = pendingPage - 1;
      if (newPage < 1) {
        newPage = numOfPending;
      }
      changePagePending(newPage);
    };
  
    const nextPage = () => {
      let newPage = pendingPage + 1;
      if (newPage > numOfPending) {
        newPage = 1;
      }
      changePagePending(newPage);
    };
    return (
      <Wrapper>
        <button className="prev-btn" onClick={prevPage}>
          <HiChevronDoubleLeft />
        </button>
        <div className="btn-container">
          {pages.map((pageNum) => {
            return (
              <button
                type="button"
                className={pageNum === pendingPage ? "pageBtn active" : "pageBtn"}
                key={pageNum}
                onClick={() => changePagePending(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}
        </div>
        <button className="next-btn" onClick={nextPage}>
          <HiChevronDoubleRight />
        </button>
      </Wrapper>
    );
};

export default PageRecordsContainer;