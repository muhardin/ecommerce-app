// utils/pagination.ts

export function generatePageLinks(
  currentPage: number,
  totalPages: number
): number[] {
  const maxVisiblePages = 5; // Adjust this value based on your preference
  const halfVisiblePages = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - halfVisiblePages);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust startPage and endPage if the current page is near the beginning or end
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages: number[] = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return pages;
}
