class FilterModel {
    name?: string;
    count?: number;
}

export class CategoryModel {
    id?: string;
    name?: string;
    count?: number;
    sub_categories?: CategoryModel[];
}

export class CategoryFilterModel {
    name?: string;
    category_id?: string;
    filters?: FilterModel[];
}