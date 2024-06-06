"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";
import { SmallButton } from "./SmallButton";
import {
  CaretRight,
  CaretDoubleRight,
  CaretLeft,
  CaretDoubleLeft,
} from "@phosphor-icons/react";
interface PaginationProps {
  totalOfProducts: number;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  totalOfProducts,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentLimit = Number(searchParams.get("limit") || 30);
  const currentPage = Number(searchParams.get("page") || 1);
  const totalPages = Math.ceil(totalOfProducts / currentLimit);

  console.log("Pagination:", {
    currentLimit: currentLimit,
    currentPage: currentPage,
    totalPages: totalPages,
  });
  console.log("totalOfPages-2",totalPages);

  console.log();

  function handleChangePage(newPage: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  }
  function handleNextPage() {
    const params = new URLSearchParams(searchParams);

    params.set("page", (currentPage + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  }
  function handlePreviousPage() {
    const params = new URLSearchParams(searchParams);

    params.set("page", (currentPage - 1).toString());
    replace(`${pathname}?${params.toString()}`);
  }
  function handleJumpToFirstPage() {
    const params = new URLSearchParams(searchParams);

    params.set("page", (1).toString());
    replace(`${pathname}?${params.toString()}`);
  }
  function handleJumpToLastPage() {
    const params = new URLSearchParams(searchParams);

    params.set("page", totalPages.toString());
    replace(`${pathname}?${params.toString()}`);
  }


  const renderPageButtons = () => {
    let buttons = [];

    // Add previous pages up to 2 pages before the current page
    for (let i = Math.max(1, currentPage - 2); i < currentPage; i++) {
      buttons.push(
        <SmallButton key={i} onClick={() => handleChangePage(i)}>
          {i}
        </SmallButton>
      );
    }

    // Add current page
    buttons.push(
      <SmallButton key={currentPage} disabled>
        {currentPage}
      </SmallButton>
    );

    // Add next pages up to 3 pages after the current page
    for (let i = currentPage + 1; i <= Math.min(totalPages, currentPage + 3); i++) {
      buttons.push(
        <SmallButton key={i} onClick={() => handleChangePage(i)}>
          {i}
        </SmallButton>
      );
    }

    // Add ellipsis and last page if there are more pages after the next 3 pages
    if (currentPage + 3 < totalPages) {
      if (currentPage + 4 < totalPages) {
        buttons.push(<SmallButton key="ellipsis" disabled>...</SmallButton>);
      }
      buttons.push(
        <SmallButton key={totalPages} onClick={() => handleChangePage(totalPages)}>
          {totalPages}
        </SmallButton>
      );
    }

    return buttons;
  };



  return (
    <div className="flex flex-row gap-2 items-stretch justify-center">
      <SmallButton
        icon={CaretDoubleLeft}
        onClick={handleJumpToFirstPage}
        disabled={currentPage == 1}
      />
      <SmallButton
        icon={CaretLeft}
        onClick={handlePreviousPage}
        disabled={currentPage == 1}
      />
      {/* {currentPage >= 3&& <SmallButton>{currentPage-2}</SmallButton>}
      {currentPage >= 2&& <SmallButton>{currentPage-1}</SmallButton>}

      <SmallButton disabled>{currentPage}</SmallButton>
      { Array.from({length:3}).map((_,index)=>(<></>)) } */}

      {renderPageButtons()}

      <SmallButton
        icon={CaretRight}
        onClick={handleNextPage}
        disabled={currentPage == totalPages}
      />
      <SmallButton
        icon={CaretDoubleRight}
        onClick={handleJumpToLastPage}
        disabled={currentPage == totalPages}
      />
    </div>
  );
};
