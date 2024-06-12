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
import useWindowDimensions from "@/utils/useWindowDimensions";
interface PaginationProps {
  totalOfProducts: number;
}

export const Pagination: FunctionComponent<PaginationProps> = ({
  totalOfProducts,
}) => {
  const {width} = useWindowDimensions()
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

  function handleChangePage(newPage: number) {
    
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
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
    console.log("rendering");
    
    let buttons = [];

    // Add previous pages up to 2 pages before the current page
    for (let i = Math.max(1, currentPage - 2); i < currentPage; i++) {
      buttons.push(
        <SmallButton key={i} variant="outline" style={width<768&&i == currentPage-2?{display:"none"}:{}} onClick={() => handleChangePage(i)}>
          {i}
        </SmallButton>
      );
    }

    // Add current page
    buttons.push(
      <SmallButton key={currentPage} variant="outline" disabled className={` w-[40px] md:w-[44px] flex flex-row gap-2 justify-center items-center px-4 py-1 rounded-lg text-lg text-violet-700 dark:text-violet-500 border border-violet-700 dark:border-violet-700 bg-transparent enabled:hover:bg-slate-500/50 enabled:dark:hover:bg-slate-500 disabled:opacity-70`}>
        {currentPage}
      </SmallButton>
    );

    // Add next pages up to 3 pages after the current page
    for (let i = currentPage + 1; i <= Math.min(totalPages, currentPage + 3); i++) {
      buttons.push(
        <SmallButton key={i} variant="outline" style={width<768&&i == currentPage+3?{display:"none"}:width<375&&i==currentPage+2?{display:"none"}:{}} onClick={() => handleChangePage(i)}>
          {i}
        </SmallButton>
      );
    }

    // Add ellipsis and last page if there are more pages after the next 3 pages
    if (currentPage + 3 < totalPages) {
      if (currentPage + 4 < totalPages) {
        buttons.push(<SmallButton key="ellipsis" variant="outline" style={width<768?{display:"none"}:{}} disabled>...</SmallButton>);
      }
      buttons.push(
        <SmallButton key={totalPages} variant="outline" style={width<768?{display:"none"}:{}} onClick={() => handleChangePage(totalPages)}>
          {totalPages}
        </SmallButton>
      );
    }

    return buttons;
  };



  return (
    <div className="flex flex-row gap-1 md:gap-2 items-stretch justify-center">
      <SmallButton
        icon={CaretDoubleLeft}
        variant="outline"
        onClick={handleJumpToFirstPage}
        disabled={currentPage == 1}
      />
      <SmallButton
        icon={CaretLeft}
        variant="outline"
        onClick={handlePreviousPage}
        disabled={currentPage == 1}
      />

      {renderPageButtons()}

      <SmallButton
        icon={CaretRight}
        variant="outline"
        onClick={handleNextPage}
        disabled={currentPage == totalPages}
      />
      <SmallButton
        icon={CaretDoubleRight}
        variant="outline"
        onClick={handleJumpToLastPage}
        disabled={currentPage == totalPages}
      />
    </div>
  );
};
