interface PostSortOption {
    value: string;
    name: string;
};

export const options: PostSortOption[] = [
    { value: 'title_asc', name: 'По названию (A-Z)' },
    { value: 'title_desc', name: 'По названию (Z-A)' },
    { value: 'body_asc', name: 'По описанию (A-Z)' },
    { value: 'body_desc', name: 'По описанию (Z-A)' },
];