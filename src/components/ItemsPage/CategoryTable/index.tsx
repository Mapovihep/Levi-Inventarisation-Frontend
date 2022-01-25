import React from 'react'
import "./categoryTable.css"

type ICategoryTable = {
    categoryTitles: string[]
}
export const CategoryTable: React.FC<ICategoryTable> = ({categoryTitles}) => {
    return (
        <div>
            <button className="addCategory__ItemsPage">+ Add Category</button>
            <ul className="columnTitles__ItemsPage">
                <li className="columnTitle__ItemsPage">CATEGORY</li>
                <li className="columnTitle__ItemsPage">NUMBER OF PAGE</li>
            </ul>
            <ul className="categoryList__ItemsPage">
                {categoryTitles.map(title =><li className="category__ItemsPage"><a>{title}</a></li>)}
            </ul>
        </div>
    )
}