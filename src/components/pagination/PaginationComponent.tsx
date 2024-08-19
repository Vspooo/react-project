"use client"
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from "@mui/material";
import "@/styles/style.paginationComponent.css";
interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const PaginationComponent: FC<PaginationProps> = ({ currentPage, totalPages }) => {
    const router = useRouter();

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        if (page >= 1 && page <= totalPages) {
            router.push(`?page=${page}`);
        }
    };

    const pageRange = 5;
    const startPage = Math.max(1, currentPage - pageRange);
    const endPage = Math.min(totalPages, currentPage + pageRange);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <Stack spacing={2}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                siblingCount={pageRange}
                boundaryCount={1}
                renderItem={(item) => {
                    const isActive = item.page === currentPage;
                    return (
                        <PaginationItem
                            {...item}
                            component="button"
                            className={`pagination-button ${isActive ? 'active' : 'inactive'}`}
                        />
                    );
                }}
            />
        </Stack>
    );
};

export default PaginationComponent;
