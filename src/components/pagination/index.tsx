import * as React from "react";
import { ComponentProps, useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Button } from "../button";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { cn } from "../../lib/utils";

const page_limits = [5, 10, 50, 100];

export function Pagination({
  totalData,
  initialItemsPerPage = 10,
  onPageChange,
  currentPage: givenPageNo,
  pageLimits = page_limits,
}: {
  totalData: number;
  initialItemsPerPage?: number;
  pageLimits?: number[];
  currentPage: number;
  onPageChange: ({
    currentPage,
    pageOffset,
    itemsPerPage,
  }: {
    currentPage: number;
    pageOffset: number;
    itemsPerPage: number;
  }) => void;
}) {
  const [currentPage, setCurrentPage] = useState(givenPageNo ?? 1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [manualPageChange, setManualPageChange] = useState(false);
  const [isValidJump, setIsValidJump] = useState(true);
  const [jumpInput, setJumpInput] = useState(currentPage);

  const totalPages = Math.ceil(totalData / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setManualPageChange(true);
      setJumpInput(page);
    }
  };

  const handleItemsPerPageChange = (value: number) => {
    if (!isNaN(value) && value > 0) {
      setItemsPerPage(value);
      setManualPageChange(true);
      setCurrentPage(1);
    }
  };

  const handleJumpToPage = (value: number) => {
    if (value > totalPages || !value) {
      setIsValidJump(false);
      return;
    } else setIsValidJump(true);
    handlePageChange(value);
  };

  useEffect(() => {
    if (manualPageChange) {
      onPageChange({
        currentPage,
        pageOffset: (currentPage - 1) * itemsPerPage,
        itemsPerPage,
      });
      setManualPageChange(false);
    }
  }, [currentPage, itemsPerPage, manualPageChange, onPageChange]);

  return (
    <div className="flex flex-col gap-2 px-2 mt-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <Select
            defaultValue={itemsPerPage.toString()}
            onValueChange={(val) => handleItemsPerPageChange(+val)}
          >
            <SelectTrigger className="w-16 h-6 pr-2 text-[12.5px] font-medium border-2 rounded-sm">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {pageLimits.map((item) => (
                <SelectItem
                  className="text-sm"
                  key={item}
                  value={item.toString()}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <span className="text-sm font-medium text-muted-foreground">
            Records per page
          </span>
        </div>
        <div className="flex flex-wrap items-center space-x-2.5 space-y-2.5">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground">
              Jump to page
            </span>
            <Input
              type="number"
              value={jumpInput ?? 1}
              onKeyDown={(e) => e.keyCode == 13 && handleJumpToPage(jumpInput)}
              onChange={(e) => setJumpInput(e.target.valueAsNumber)}
              className={cn(
                "w-16 h-6 text-xs font-medium rounded-sm",
                !isValidJump && "border-destructive"
              )}
            />
          </div>
          <div className="flex items-center gap-1.5 !mt-0">
            <PaginationButton
              disabled={currentPage == 1}
              onClick={() => handlePageChange(1)}
            >
              <ChevronsLeftIcon className="w-4 h-4" />
            </PaginationButton>
            <PaginationButton
              disabled={currentPage == 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </PaginationButton>
            {generatePageNumbers(currentPage, totalPages).map((page, index) =>
              page === "..." ? (
                <PaginationElipse key={index} />
              ) : (
                <PaginationButton
                  key={index}
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page as number)}
                >
                  {page}
                </PaginationButton>
              )
            )}
            <PaginationButton
              disabled={currentPage == totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </PaginationButton>
            <PaginationButton
              disabled={currentPage == totalPages}
              onClick={() => handlePageChange(totalPages)}
            >
              <ChevronsRightIcon className="w-4 h-4" />
            </PaginationButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginationButton({
  className,
  isActive = false,
  ...props
}: ComponentProps<typeof Button> & { isActive?: boolean }) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "rounded-full hover:bg-gray-300 h-7 w-7 font-medium",
        className,
        isActive && "!bg-gray-300"
      )}
      {...props}
    />
  );
}

function PaginationElipse() {
  return <span className="px-0.5 -mt-2">...</span>;
}

function generatePageNumbers(currentPage: number, totalPages: number) {
  const delta = 1;
  const range = [];
  const rangeWithDots = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    rangeWithDots.push(1, "...");
  } else {
    rangeWithDots.push(1);
  }

  rangeWithDots.push(...range);

  if (currentPage + delta < totalPages - 1) {
    rangeWithDots.push("...", totalPages);
  } else if (totalPages > 1) {
    rangeWithDots.push(totalPages);
  }

  return rangeWithDots;
}
