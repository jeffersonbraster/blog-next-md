import Link from "next/link";
import { useRouter } from "next/router";

const Pagination = ({ currentPage, numPages }) => {
  const router = useRouter();

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className="mt-6 flex justify-center items-center">
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-200 text-gray-700 mr-1 hover:bg-gray-200 cursor-pointer">
              Anterior
            </li>
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`} key={i}>
            <li
              className={
                router.asPath === `/blog/page/${i + 1}`
                  ? "relative block py-2 px-3 leading-tight bg-gray-900 border border-gray-200 text-gray-200 mr-1 hover:bg-gray-200 cursor-pointer"
                  : "relative block py-2 px-3 leading-tight bg-white border border-gray-200 text-gray-700 mr-1 hover:bg-gray-200 cursor-pointer"
              }
            >
              {i + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-200 text-gray-700 mr-1 hover:bg-gray-200 cursor-pointer">
              Proxima
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
